package productRepo

import "ecommers/domain"

type ProductRepo interface {
	FindById(id int64) *domain.Product
	FindTop100() []domain.Product
	FindTop(top int64) []domain.Product
	Save(p *domain.Product) domain.Product
	DeleteOne(p *domain.Product)
}
