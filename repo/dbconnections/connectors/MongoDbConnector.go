package connectors

import (
	"context"
	"github.com/joho/godotenv"
	"log"
	"os"
	"strings"
)

type MongoConnector struct {
	source   string
	port     string
	username string
	password string
	uri      string
}

func NewMongoConnector() *MongoConnector {
	err := godotenv.Load("application.env")
	if err != nil {
		log.Fatal("Error loading application.env file")
	}
	connector := newMongoConnector(
		os.Getenv("mongo.datasource.url"),
		os.Getenv("mongo.datasource.port"),
		os.Getenv("mongo.datasource.username"),
		os.Getenv("mongo.datasource.password"))
	return connector
}

func newMongoConnector(source, port, username, password string) *MongoConnector {
	mongoConnector := &MongoConnector{
		source:   source,
		port:     port,
		username: username,
		password: password,
		Context:  context.TODO(),
	}
	return mongoConnector
}

func (m *MongoConnector) buildUri() {
	uriBuilder := strings.Builder{}
	uriBuilder.WriteString("mongo://")
	uriBuilder.WriteString(m.source)
	uriBuilder.WriteString(":")
	uriBuilder.WriteString(m.port)
	m.uri = uriBuilder.String()
	log.Println("Connected to MongoDb at uri=" + m.uri)
}

func (m *MongoConnector) GetUsername() string {
	if m.username != "" {
		return m.username
	} else {
		panic("Empty username for mongoDb connector")
	}
}

func (m *MongoConnector) GetPassword() string {
	if m.password != "" {
		return m.password
	} else {
		panic("Empty password for MongoDb")
	}
}

func (m *MongoConnector) GetUri() string {
	if m.uri != "" {
		return m.uri
	} else {
		panic("Empty URI fo mongodb connector")
	}
}
