package service

import (
	"ecommers/domain"
	"log"
	"time"
)

type ProductService struct {
}

func (ps *ProductService) GetById(idc chan int64, productChan chan *domain.Product) {
	id := <-idc
	product := domain.Product{Id: id}
	// TODO: add db and implement search in db
	productChan <- &product
}

func (ps *ProductService) SaveProduct(productChannel chan *domain.Product, productChan chan *domain.Product) {
	newProduct := <-productChannel
	//TODO: save last product in db
	newProduct.CreatingDate = time.Now()
	newProduct.Category = "some Category"
	log.Println(newProduct)
	productChan <- newProduct
}
