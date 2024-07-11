package MongoConnector

import (
	"context"
	"ecommers/repo/dbconnections/MongoConnector/connector"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"runtime/debug"
)

/*
Database name = ecommers
Collections:

	Product collection - collection for products
*/
type MongoDB struct {
	mc                *connector.MongoConnector
	ProductCollection *mongo.Collection
	client            *mongo.Client
	Context           context.Context
}

// for mongodb expected *connector.MongoConnector
func (m *MongoDB) InitConnection(conn any) {
	mongoConnector, ok := conn.(*connector.MongoConnector)
	if !ok {
		log.Println("for mongodb expected *connector.MongoConnector")
		log.Fatal(ok)
	}
	m.mc = mongoConnector
	m.Context = context.TODO()
	m.init()
	m.connect()
}

func (m *MongoDB) init() {

}

func (m *MongoDB) connect() {
	if m.ProductCollection != nil {
		return
	}

	credential := options.Credential{
		Username: m.mc.GetUsername(),
		Password: m.mc.GetPassword(),
	}

	clientOptions := options.Client()
	clientOptions.ApplyURI(m.mc.GetUri()).SetAuth(credential)

	clientMongo, err := mongo.Connect(m.Context, clientOptions)
	if err != nil {
		log.Println("Can't connect to MongoDB. Error: %v\n Stack trace: \n %v\n", err, debug.Stack())
		log.Fatal(err)
	}

	err = clientMongo.Ping(m.Context, nil)
	if err != nil {
		log.Println("Ping can't reach MongoDB \n Error: %v\n, Stack trace: \n %v \n", err, debug.Stack())
		log.Fatal(err)
	}
	log.Println("Connected to mongo db at uri = %v, with username = %v \n", m.mc.GetUri(), m.mc.GetUsername())

	m.ProductCollection = clientMongo.Database("ecommers").Collection("products")
	m.client = clientMongo

}

func (m *MongoDB) Disconnect() {
	m.client.Disconnect(m.Context)
}
