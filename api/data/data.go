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
        Password: "securepassword",
    }

    conn, err := pgx.Connect(connConfig)
    if err != nil {
        log.Fatalf("Unable to connect to database: %v\n", err)
    }
    defer conn.Close()

	sqlCommands := `CREATE TABLE "addresses"(
    "id" bigserial NOT NULL,
    "user_id" BIGINT NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "province" VARCHAR(255) NOT NULL,
    "zip_code" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "unit_number" VARCHAR(255) NULL
);
ALTER TABLE
    "addresses" ADD PRIMARY KEY("id");
CREATE TABLE "order_items"(
    "id" bigserial NOT NULL,
    "order_id" BIGINT NOT NULL,
    "item_id" BIGINT NOT NULL,
    "quantity" INTEGER NOT NULL
);
ALTER TABLE
    "order_items" ADD PRIMARY KEY("id");
CREATE TABLE "attachements"(
    "id" bigserial NOT NULL,
    "attachement_name" VARCHAR(255) NOT NULL,
    "prod_id" BIGINT NOT NULL
);
ALTER TABLE
    "attachements" ADD PRIMARY KEY("id");
CREATE TABLE "delieveries"(
    "id" bigserial NOT NULL,
    "product_id" BIGINT NOT NULL,
    "shipping_rate_id" BIGINT NOT NULL,
    "additional_info" TEXT NOT NULL,
    "shipment_date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "delieveries" ADD PRIMARY KEY("id");
CREATE TABLE "wishlist_items"(
    "id" bigserial NOT NULL,
    "user_id" BIGINT NOT NULL,
    "prod_id" BIGINT NOT NULL
);
ALTER TABLE
    "wishlist_items" ADD PRIMARY KEY("id");
CREATE TABLE "shipping_rate"(
    "id" bigserial NOT NULL,
    "method" VARCHAR(255) NOT NULL,
    "base_rate" DECIMAL(8, 2) NOT NULL
);
ALTER TABLE
    "shipping_rate" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "shipping_rate"."method" IS 'e.g., standard, express, overnight';
CREATE TABLE "categories"(
    "id" bigserial NOT NULL,
    "category_name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "categories" ADD PRIMARY KEY("id");
CREATE TABLE "reviews_reports"(
    "id" bigserial NOT NULL,
    "review_id" BIGINT NOT NULL,
    "reporter_id" BIGINT NOT NULL,
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "report_type" VARCHAR(255) NOT NULL,
    "report_description" TEXT NOT NULL,
    "report_status" BIGINT NOT NULL
);
ALTER TABLE
    "reviews_reports" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "reviews_reports"."report_type" IS 'fraud, bad quality etc';
COMMENT
ON COLUMN
    "reviews_reports"."report_status" IS 'eg pending, approved, declined';
CREATE TABLE "products"(
    "prod_id" bigserial NOT NULL,
    "prod_name" VARCHAR(255) NOT NULL,
    "prod_price" DECIMAL(8, 2) NOT NULL,
    "seller_id" BIGINT NOT NULL,
    "stock_quantity" BIGINT NOT NULL,
    "tax_id" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL,
    "suspended" BOOLEAN NOT NULL
);
ALTER TABLE
    "products" ADD PRIMARY KEY("prod_id");
CREATE TABLE "orders"(
    "order_id" bigserial NOT NULL,
    "buyer_id" BIGINT NOT NULL,
    "order_status" VARCHAR(255) NOT NULL,
    "order_price" DECIMAL(8, 2) NOT NULL,
    "destination_addr_id" BIGINT NOT NULL,
    "order_shipping_rate" BIGINT NOT NULL,
    "transaction_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "current_location" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("order_id");
COMMENT
ON COLUMN
    "orders"."order_status" IS 'processed/delievered/cancelled etc';
COMMENT
ON COLUMN
    "orders"."transaction_id" IS 'Transaction ID provided by 3d party service like stripe after the payment';
CREATE TABLE "transactions"(
    "transaction_id" bigserial NOT NULL,
    "transaction_type" VARCHAR(255) NOT NULL,
    "payment_method" VARCHAR(255) NOT NULL,
    "order_id" BIGINT NOT NULL,
    "payer_id" BIGINT NOT NULL,
    "payee_id" BIGINT NOT NULL,
    "amount" DECIMAL(8, 2) NOT NULL,
    "transaction_status" VARCHAR(255) NOT NULL,
    "transaction_time" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "transactions" ADD PRIMARY KEY("transaction_id");
COMMENT
ON COLUMN
    "transactions"."transaction_type" IS 'e.g., payment or refund';
CREATE TABLE "products_reports"(
    "id" bigserial NOT NULL,
    "product_id" BIGINT NOT NULL,
    "reporter_id" BIGINT NOT NULL,
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "report_type" VARCHAR(255) NOT NULL,
    "report_description" TEXT NOT NULL,
    "report_status" BIGINT NOT NULL
);
ALTER TABLE
    "products_reports" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "products_reports"."report_type" IS 'fraud, bad quality etc';
COMMENT
ON COLUMN
    "products_reports"."report_status" IS 'eg pending, approved, declined';
CREATE TABLE "reviews"(
    "review_id" bigserial NOT NULL,
    "product_id" BIGINT NOT NULL,
    "rate" INTEGER NOT NULL,
    "reviewer_id" BIGINT NOT NULL,
    "reviewer_comment" TEXT NULL
);
ALTER TABLE
    "reviews" ADD PRIMARY KEY("review_id");
COMMENT
ON COLUMN
    "reviews"."rate" IS 'Range from 1 to 5';
CREATE TABLE "reports"(
    "id" bigserial NOT NULL,
    "report_category" VARCHAR(255) NOT NULL,
    "report_type" VARCHAR(255) NOT NULL,
    "report_status" VARCHAR(255) NOT NULL,
    "reporter_id" BIGINT NOT NULL,
    "reported_id" BIGINT NOT NULL,
    "report_descriptiion" BIGINT NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "updated_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "reports" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "reports"."report_category" IS 'order, user, review, product';
COMMENT
ON COLUMN
    "reports"."report_type" IS 'fraud, false description, harmful or illegal activities, spam, other etc.';
COMMENT
ON COLUMN
    "reports"."report_status" IS 'pending, accepted, declined';
COMMENT
ON COLUMN
    "reports"."reported_id" IS 'Foreign key  of a row from the entity that''s being reported (user, order etc)';
CREATE TABLE "reviews_responses"(
    "id" bigserial NOT NULL,
    "user_id" BIGINT NOT NULL,
    "review_id" BIGINT NOT NULL,
    "response_text" BIGINT NOT NULL
);
ALTER TABLE
    "reviews_responses" ADD PRIMARY KEY("id");
CREATE TABLE "questions"(
    "id" bigserial NOT NULL,
    "user_id" BIGINT NOT NULL,
    "product_id" BIGINT NOT NULL,
    "question_text" TEXT NOT NULL
);
ALTER TABLE
    "questions" ADD PRIMARY KEY("id");
CREATE TABLE "users"(
    "user_id" bigserial NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "user_role" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "user_email" BIGINT NOT NULL,
    "suspended" BOOLEAN NOT NULL,
    "contact_phone" INTEGER NOT NULL,
    "contact_email" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("user_id");
CREATE TABLE "cart_items"(
    "id" bigserial NOT NULL,
    "user_id" BIGINT NOT NULL,
    "prod_id" BIGINT NOT NULL,
    "quantity" INTEGER NOT NULL
);
ALTER TABLE
    "cart_items" ADD PRIMARY KEY("id");
CREATE TABLE "questions_responses"(
    "id" bigserial NOT NULL,
    "question_id" BIGINT NOT NULL,
    "user_id" BIGINT NOT NULL,
    "respons_text" TEXT NOT NULL
);
ALTER TABLE
    "questions_responses" ADD PRIMARY KEY("id");
CREATE TABLE "tax_rates"(
    "id" bigserial NOT NULL,
    "tax_type" VARCHAR(255) NOT NULL,
    "tax_rate" DECIMAL(8, 2) NOT NULL,
    "province" VARCHAR(255) NOT NULL,
    "tax_province" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "tax_rates" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "tax_rates"."tax_type" IS '(GST, PST, HST)';
CREATE TABLE "product_details"(
    "id" bigserial NOT NULL,
    "prod_id" BIGINT NOT NULL,
    "prod_description" TEXT NOT NULL,
    "prod_weight" DECIMAL(8, 2) NOT NULL,
    "prod_width" DECIMAL(8, 2) NOT NULL,
    "prod_length" DECIMAL(8, 2) NOT NULL,
    "prod_height" DECIMAL(8, 2) NOT NULL,
    "product_material" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "product_details" ADD PRIMARY KEY("id");
CREATE TABLE "questions_reports"(
    "id" bigserial NOT NULL,
    "question_id" BIGINT NOT NULL,
    "reporter_id" BIGINT NOT NULL,
    "timestamp" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "report_type" VARCHAR(255) NOT NULL,
    "report_description" TEXT NOT NULL,
    "report_status" BIGINT NOT NULL
);
ALTER TABLE
    "questions_reports" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "questions_reports"."report_type" IS 'fraud, bad quality etc';
COMMENT
ON COLUMN
    "questions_reports"."report_status" IS 'eg pending, approved, declined';
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "products_reports" ADD CONSTRAINT "products_reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("user_id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_payee_id_foreign" FOREIGN KEY("payee_id") REFERENCES "users"("user_id");
ALTER TABLE
    "delieveries" ADD CONSTRAINT "delieveries_shipping_rate_id_foreign" FOREIGN KEY("shipping_rate_id") REFERENCES "shipping_rate"("id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_seller_id_foreign" FOREIGN KEY("seller_id") REFERENCES "users"("user_id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_order_shipping_rate_foreign" FOREIGN KEY("order_shipping_rate") REFERENCES "shipping_rate"("id");
ALTER TABLE
    "questions_reports" ADD CONSTRAINT "questions_reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("user_id");
ALTER TABLE
    "product_details" ADD CONSTRAINT "product_details_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "categories"("id");
ALTER TABLE
    "reviews_responses" ADD CONSTRAINT "reviews_responses_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "addresses" ADD CONSTRAINT "addresses_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "questions_responses" ADD CONSTRAINT "questions_responses_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "questions"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_review_id_foreign" FOREIGN KEY("review_id") REFERENCES "users"("user_id");
ALTER TABLE
    "attachements" ADD CONSTRAINT "attachements_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "reviews_responses" ADD CONSTRAINT "reviews_responses_review_id_foreign" FOREIGN KEY("review_id") REFERENCES "reviews"("id");
ALTER TABLE
    "wishlist_items" ADD CONSTRAINT "wishlist_items_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_destination_addr_id_foreign" FOREIGN KEY("destination_addr_id") REFERENCES "addresses"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_buyer_id_foreign" FOREIGN KEY("buyer_id") REFERENCES "users"("user_id");
ALTER TABLE
    "cart_items" ADD CONSTRAINT "cart_items_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "products_reports" ADD CONSTRAINT "products_reports_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "order_items" ADD CONSTRAINT "order_items_item_id_foreign" FOREIGN KEY("item_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "wishlist_items" ADD CONSTRAINT "wishlist_items_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_tax_id_foreign" FOREIGN KEY("tax_id") REFERENCES "tax_rates"("id");
ALTER TABLE
    "questions" ADD CONSTRAINT "questions_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "questions" ADD CONSTRAINT "questions_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "cart_items" ADD CONSTRAINT "cart_items_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "reviews_reports" ADD CONSTRAINT "reviews_reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("user_id");
ALTER TABLE
    "reviews_reports" ADD CONSTRAINT "reviews_reports_review_id_foreign" FOREIGN KEY("review_id") REFERENCES "reviews"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_reviewer_id_foreign" FOREIGN KEY("reviewer_id") REFERENCES "users"("user_id");
ALTER TABLE
    "questions_reports" ADD CONSTRAINT "questions_reports_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "questions"("id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_payer_id_foreign" FOREIGN KEY("payer_id") REFERENCES "users"("user_id");
ALTER TABLE
    "delieveries" ADD CONSTRAINT "delieveries_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("prod_id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "orders"("order_id");
ALTER TABLE
    "reports" ADD CONSTRAINT "reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("user_id");
ALTER TABLE
    "questions_responses" ADD CONSTRAINT "questions_responses_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("user_id");
ALTER TABLE
    "order_items" ADD CONSTRAINT "order_items_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "orders"("order_id");`
    _, err = conn.Exec(sqlCommands)
    if err != nil {
        log.Fatalf("Failed to execute SQL commands: %v\n", err)
    }

    fmt.Println("Database initialized successfully")
}