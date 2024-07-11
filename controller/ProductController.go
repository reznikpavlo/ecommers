package controller

import (
	"ecommers/domain"
	"ecommers/service"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"time"
)

type ProductController struct {
	productService *service.ProductService
	*http.ServeMux
	*domain.Object
}

func (pc *ProductController) GetProductById(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.ParseInt(r.PathValue("productId"), 10, 64)
	if err != nil {
		log.Println(err)
	}
	log.Println("product id = ", id)
	newProductChannel := make(chan *domain.Product)
	idChannel := make(chan int64)
	pc.Wg.Add(1)
	go func() {
		defer pc.Wg.Done()
		pc.productService.GetById(idChannel, newProductChannel)
	}()

	idChannel <- id
	product := <-newProductChannel
	log.Println(product)
	productJson, err := json.Marshal(product)
	if err != nil {
		log.Println(err)
	}
	close(newProductChannel)
	close(idChannel)
	w.Write(productJson)
}

func (pc *ProductController) PostProduct(w http.ResponseWriter, r *http.Request) {
	newProduct := domain.Product{CreatingDate: time.Now()}
	err := json.NewDecoder(r.Body).Decode(&newProduct)
	if err != nil {
		log.Println(err)
	}
	productChannel := make(chan *domain.Product)
	newProductChannel := make(chan *domain.Product)

	pc.Wg.Add(1)
	go func() {
		defer pc.Wg.Done()
		pc.productService.SaveProduct(productChannel, newProductChannel)
	}()
	productChannel <- &newProduct
	productFromDb := <-newProductChannel
	productJson, err := json.Marshal(productFromDb)
	if err != nil {
		log.Println(err)
	}
	close(newProductChannel)
	close(newProductChannel)
	w.Write(productJson)
}

func (pc *ProductController) PutProduct(writer http.ResponseWriter, request *http.Request) {
	idValue := request.PathValue("productId")
	id, err := strconv.ParseInt(idValue, 10, 64)
	if err != nil {
		log.Println(err)
	}
	newProduct := domain.Product{}
	err = json.NewDecoder(request.Body).Decode(&newProduct)
	if err != nil {
		log.Println(err)
	}
	if id != newProduct.Id {
		newProduct.Id = id
	}

	productChannel := make(chan *domain.Product)
	newProductChannel := make(chan *domain.Product)
	pc.Wg.Add(1)
	go func() {
		defer pc.Wg.Done()
		pc.productService.SaveProduct(productChannel, newProductChannel)
	}()
	productChannel <- &newProduct
	productFromDb := <-newProductChannel
	productFromDbJson, err := json.Marshal(productFromDb)
	if err != nil {
		log.Println(err)
	}
	close(productChannel)
	close(newProductChannel)
	writer.Write(productFromDbJson)
}

func (pc *ProductController) DeleteProduct(writer http.ResponseWriter, request *http.Request) {
	id, err := strconv.ParseInt(request.PathValue("productId"), 10, 64)
	if err != nil {
		log.Println(err)
	}
	productIdChannel := make(chan int64)
	productIdChannel <- id
	pc.Wg.Add(1)
	// TODO: delete method
	pc.Wg.Done()
	close(productIdChannel)

}

func (pc *ProductController) Init(psChan chan *service.ProductService) {

	pc.productService = <-psChan
	pc.ServeMux = http.NewServeMux()
	pc.HandleFunc("GET /sale/offers/{productId}", pc.GetProductById)
	pc.HandleFunc("POST /sale/offers/", pc.PostProduct)
	pc.HandleFunc("PUT /sale/offers/{productId}", pc.PutProduct)
	pc.HandleFunc("DELETE /sale/offers/{productId}", pc.DeleteProduct)
	log.Println("Product controller initialized")
	pc.Wg.Done()
}
