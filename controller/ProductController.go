package controller

import (
	"ecommers/service"
	"net/http"
)

type ProductController struct {
	productService service.ProductService
	*http.ServeMux
}

func (pc *ProductController) GetProductById(w http.ResponseWriter, r *http.Request) {
	id := r.PathValue("productId")

	w.Write()
}

func (pc *ProductController) Init(psChan chan service.ProductService) {
	ps := <-psChan
	pc.productService = ps
	pc.ServeMux = http.NewServeMux()
	pc.HandleFunc("/sale/offers/{productId}", pc.GetProductById)

}
