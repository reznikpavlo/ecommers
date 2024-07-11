package dbconnections

import (
	"context"
	"ecommers/repo/dbconnections/connectors"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"runtime/debug"
)

type MongoDB struct {
	mc                *connectors.MongoConnector
	ProductCollection *mongo.Collection
	Client            *mongo.Client
	Context           context.Context
}

func (m *MongoDB) MongoInitConnect(connector *connectors.MongoConnector) {
	m.mc = connector
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
	m.Client = clientMongo

}

func (m *MongoDB) Disconnect() {
	m.Client.Disconnect(m.Context)
}
