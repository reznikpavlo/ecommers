package data

import (
	"fmt"
	"log"

	"github.com/jackc/pgx"
)

func Init() {
    connConfig := pgx.ConnConfig{
        Host:     "localhost",
        Port:     5432,
        Database: "amazon",
        User:     "amazon_user",
        Password: "amazon_password",
    }

    conn, err := pgx.Connect(connConfig)
    if err != nil {
        fmt.Println("Unable to connect to database:", err)
        log.Fatalf("Unable to connect to database: %v\n", err)
    } else {
        fmt.Println("Connected to the database successfully!")
    }
    defer conn.Close()
}

func main() {
    Init()
}
