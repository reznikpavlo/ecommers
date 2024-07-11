package main

import (
	"fmt"
	"log"

	"github.com/jackc/pgx"
)

func main() {
    // Define the connection configuration
    connConfig := pgx.ConnConfig{
        Host:     "localhost",
        Port:     5432,
        Database: "amazon",
        User:     "amazon_user",
        Password: "securepassword",
    }

    // Establish a PostgreSQL connection
    conn, err := pgx.Connect(connConfig)
    if err != nil {
        log.Fatalf("Unable to connect to database: %v\n", err)
    }
    defer conn.Close()

    // Perform a query
    var greeting string
    err = conn.QueryRow("SELECT 'Hello, world!'").Scan(&greeting)
    if err != nil {
        log.Fatalf("QueryRow failed: %v\n", err)
    }

    fmt.Println(greeting)
}
