package main

import (
	"context"
	"ecommers/controller"
	"ecommers/domain"
	"ecommers/service"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	//product service init
	productService := service.ProductService{}

	mux := http.NewServeMux()

	//productController init
	psChan := make(chan *service.ProductService)

	productController := controller.ProductController{}
	productController.Object = &domain.Object{}
	productController.Wg.Add(1)
	go productController.Init(psChan)
	psChan <- &productService
	close(psChan)

	mux.Handle("/sale/offers/", productController.ServeMux)
	mux.Handle("/", http.FileServer(http.Dir("./templates/static/")))
	server := http.Server{Addr: "localhost:8080", Handler: mux}

	//Server start
	log.Println("Starting server on :8080")
	go func() {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listen: %s\n", err)
		}
	}()

	// some code from web
	// Wait for interrupt signal to gracefully shutdown the server with a timeout of 5 seconds.
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("Shutting down server...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %s", err)
	}

	productController.Wg.Wait()
	log.Println("Server exiting")

}
