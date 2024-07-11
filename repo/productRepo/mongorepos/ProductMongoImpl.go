package mongorepos

import (
	"ecommers/domain"
	"ecommers/repo/dbconnections/MongoConnector"
	"errors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"runtime/debug"
)

type ProductMongoImpl struct {
	*MongoConnector.MongoDB
}

func (p *ProductMongoImpl) FindById(id int64) *domain.Product {
	result := domain.Product{}
	filter := bson.D{{"id", id}}
	err := p.ProductCollection.FindOne(p.Context, filter).Decode(&result)
	if errors.Is(err, mongo.ErrNoDocuments) {
		log.Println("Didn't find any products with id = %v\n", id)
	}
	return &result
}

func (p *ProductMongoImpl) FindTop100() []domain.Product {
	return p.FindTop(100)
}

func (p *ProductMongoImpl) FindTop(top int64) []domain.Product {
	var result []domain.Product
	find := options.Find()
	if top > 0 {
		find = options.Find().SetLimit(top)
	}
	cursor, err := p.ProductCollection.Find(p.Context, bson.D{}, find)
	if err != nil {
		log.Println("error, while tried to find %v products in mongo db", top)
		log.Println("Error: %v, \n Stacktrace: %v \n", err, debug.Stack())
	}
	defer cursor.Close(p.Context)

	if err = cursor.All(p.Context, &result); err != nil {
		log.Println("Couldn't parse result from mongoDb")
		log.Println("Error: %v, \n Stacktrace: %v \n", err, debug.Stack())
	}
	return result
}

func (p *ProductMongoImpl) Save(product *domain.Product) *domain.Product {
	if product.Id == 0 {
		lastMessageInDb := p.getLastProductFromDb()
		product.Id = lastMessageInDb.Id + 1
		one, err := p.ProductCollection.InsertOne(p.Context, product)
		if err != nil {
			log.Println("Couldn't insert new message in mongoDb")
			log.Println("Error: %v, \n Stacktrace: %v \n", err, debug.Stack())
		}
		log.Println(one)
	}

	return p.FindById(product.Id)
}

func (p *ProductMongoImpl) DeleteOne(product *domain.Product) {
	productJson, err := bson.Marshal(product)
	if err != nil {
		log.Println("Error: %v, \n Stacktrace: %v \n", err, debug.Stack())
	}
	p.ProductCollection.DeleteOne(p.Context, productJson)
}

func (p *ProductMongoImpl) getLastProductFromDb() *domain.Product {
	filter := bson.D{}
	var products []domain.Product

	optionsSort := options.Find().SetSort(bson.D{{"id", -1}})

	cursor, err := p.ProductCollection.Find(p.Context, filter, optionsSort)
	if err != nil {
		log.Println("Couldn't get result from mongoDb in getLastProductFromDb()")
		log.Println("Error: %v, \n Stacktrace: %v \n", err, debug.Stack())
	}

	cursor.All(p.Context, &products)
	return &products[0]
}
