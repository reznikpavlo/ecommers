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
	idChannel := make(chan int64)
	idChannel <- id
	pc.Wg.Add(1)
	productChan := pc.productService.GetById(idChannel)
	pc.Wg.Done()
	product := <-productChan
	log.Println(product)
	productJson, err := json.Marshal(product)
	if err != nil {
		log.Println(err)
	}
	w.Write(productJson)
}

func (pc *ProductController) PostProduct(w http.ResponseWriter, r *http.Request) {
	newProduct := domain.Product{CreatingDate: time.Now()}
	err := json.NewDecoder(r.Body).Decode(&newProduct)
	if err != nil {
		log.Println(err)
	}
	productChannel := make(chan *domain.Product)
	productChannel <- &newProduct
	pc.Wg.Add(1)
	npChan := pc.productService.SaveProduct(productChannel)
	pc.Wg.Done()
	productFromDb := <-npChan
	productJson, err := json.Marshal(productFromDb)
	if err != nil {
		log.Println(err)
	}
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
	productChannel <- &newProduct
	pc.Wg.Add(1)
	productSavedChannel := pc.productService.SaveProduct(productChannel)
	pc.Wg.Done()
	productFromDb := <-productSavedChannel
	productFromDbJson, err := json.Marshal(productFromDb)
	if err != nil {
		log.Println(err)
	}
	writer.Write(productFromDbJson)
}

func (pc *ProductController) DeleteProduct(writer http.ResponseWriter, request *http.Request) {

}

func (pc *ProductController) Init(psChan chan *service.ProductService) {

	pc.productService = <-psChan
	pc.ServeMux = http.NewServeMux()
	pc.HandleFunc("GET /sale/offers/{productId}", pc.GetProductById)
	pc.HandleFunc("POST /sale/offers/", pc.PostProduct)
	pc.HandleFunc("PUT /sale/offers/{productId}", pc.PutProduct)
	pc.HandleFunc("DELETE /sale/offers/", pc.DeleteProduct)
}
