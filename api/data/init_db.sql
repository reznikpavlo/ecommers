CREATE TABLE "addresses"(
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
CREATE TABLE "attachments"(
    "id" bigserial NOT NULL,
    "attachment_name" VARCHAR(255) NOT NULL,
    "prod_id" BIGINT NOT NULL
);
ALTER TABLE
    "attachments" ADD PRIMARY KEY("id");
CREATE TABLE "deliveries"(
    "id" bigserial NOT NULL,
    "product_id" BIGINT NOT NULL,
    "shipping_rate_id" BIGINT NOT NULL,
    "additional_info" TEXT NOT NULL,
    "shipment_date" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL
);
ALTER TABLE
    "deliveries" ADD PRIMARY KEY("id");
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
    "id" bigserial NOT NULL,
    "prod_name" VARCHAR(255) NOT NULL,
    "prod_price" DECIMAL(8, 2) NOT NULL,
    "seller_id" BIGINT NOT NULL,
    "stock_quantity" BIGINT NOT NULL,
    "tax_id" BIGINT NOT NULL,
    "category_id" BIGINT NOT NULL,
    "suspended" BOOLEAN NOT NULL
);
ALTER TABLE
    "products" ADD PRIMARY KEY("id");
CREATE TABLE "orders"(
    "id" bigserial NOT NULL,
    "buyer_id" BIGINT NOT NULL,
    "order_status" VARCHAR(255) NOT NULL,
    "order_price" DECIMAL(8, 2) NOT NULL,
    "destination_addr_id" BIGINT NOT NULL,
    "shipping_rate_id" BIGINT NOT NULL,
    "transaction_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL,
    "current_location" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "orders" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "orders"."order_status" IS 'processed/delievered/cancelled etc';
COMMENT
ON COLUMN
    "orders"."transaction_id" IS 'Transaction ID provided by 3d party service like stripe after the payment';
CREATE TABLE "transactions"(
    "id" bigserial NOT NULL,
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
    "transactions" ADD PRIMARY KEY("id");
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
    "id" bigserial NOT NULL,
    "product_id" BIGINT NOT NULL,
    "rate" INTEGER NOT NULL,
    "reviewer_id" BIGINT NOT NULL,
    "reviewer_comment" TEXT NULL
);
ALTER TABLE
    "reviews" ADD PRIMARY KEY("id");
COMMENT
ON COLUMN
    "reviews"."rate" IS 'Range from 1 to 5';
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
    "id" bigserial NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "user_role" VARCHAR(255) NOT NULL,
    "password_hash" TEXT NOT NULL,
    "user_email" VARCHAR(255) NOT NULL,
    "suspended" BOOLEAN NOT NULL,
    "contact_phone" INTEGER NOT NULL,
    "contact_email" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
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
    "response_text" TEXT NOT NULL
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
    "reviews" ADD CONSTRAINT "reviews_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
ALTER TABLE
    "products_reports" ADD CONSTRAINT "products_reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_payee_id_foreign" FOREIGN KEY("payee_id") REFERENCES "users"("id");
ALTER TABLE
    "deliveries" ADD CONSTRAINT "deliveries_shipping_rate_id_foreign" FOREIGN KEY("shipping_rate_id") REFERENCES "shipping_rate"("id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_seller_id_foreign" FOREIGN KEY("seller_id") REFERENCES "users"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_shipping_rate_id_foreign" FOREIGN KEY("shipping_rate_id") REFERENCES "shipping_rate"("id");
ALTER TABLE
    "questions_reports" ADD CONSTRAINT "questions_reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("id");
ALTER TABLE
    "product_details" ADD CONSTRAINT "product_details_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_category_id_foreign" FOREIGN KEY("category_id") REFERENCES "categories"("id");
ALTER TABLE
    "reviews_responses" ADD CONSTRAINT "reviews_responses_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "addresses" ADD CONSTRAINT "addresses_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "questions_responses" ADD CONSTRAINT "questions_responses_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "questions"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_id_foreign" FOREIGN KEY("id") REFERENCES "users"("id");
ALTER TABLE
    "attachments" ADD CONSTRAINT "attachments_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("id");
ALTER TABLE
    "reviews_responses" ADD CONSTRAINT "reviews_responses_review_id_foreign" FOREIGN KEY("review_id") REFERENCES "reviews"("id");
ALTER TABLE
    "wishlist_items" ADD CONSTRAINT "wishlist_items_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_destination_addr_id_foreign" FOREIGN KEY("destination_addr_id") REFERENCES "addresses"("id");
ALTER TABLE
    "orders" ADD CONSTRAINT "orders_buyer_id_foreign" FOREIGN KEY("buyer_id") REFERENCES "users"("id");
ALTER TABLE
    "cart_items" ADD CONSTRAINT "cart_items_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("id");
ALTER TABLE
    "products_reports" ADD CONSTRAINT "products_reports_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
ALTER TABLE
    "order_items" ADD CONSTRAINT "order_items_item_id_foreign" FOREIGN KEY("item_id") REFERENCES "products"("id");
ALTER TABLE
    "wishlist_items" ADD CONSTRAINT "wishlist_items_prod_id_foreign" FOREIGN KEY("prod_id") REFERENCES "products"("id");
ALTER TABLE
    "products" ADD CONSTRAINT "products_tax_id_foreign" FOREIGN KEY("tax_id") REFERENCES "tax_rates"("id");
ALTER TABLE
    "questions" ADD CONSTRAINT "questions_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
ALTER TABLE
    "questions" ADD CONSTRAINT "questions_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "cart_items" ADD CONSTRAINT "cart_items_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "reviews_reports" ADD CONSTRAINT "reviews_reports_reporter_id_foreign" FOREIGN KEY("reporter_id") REFERENCES "users"("id");
ALTER TABLE
    "reviews_reports" ADD CONSTRAINT "reviews_reports_review_id_foreign" FOREIGN KEY("review_id") REFERENCES "reviews"("id");
ALTER TABLE
    "reviews" ADD CONSTRAINT "reviews_reviewer_id_foreign" FOREIGN KEY("reviewer_id") REFERENCES "users"("id");
ALTER TABLE
    "questions_reports" ADD CONSTRAINT "questions_reports_question_id_foreign" FOREIGN KEY("question_id") REFERENCES "questions"("id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_payer_id_foreign" FOREIGN KEY("payer_id") REFERENCES "users"("id");
ALTER TABLE
    "deliveries" ADD CONSTRAINT "deliveries_product_id_foreign" FOREIGN KEY("product_id") REFERENCES "products"("id");
ALTER TABLE
    "transactions" ADD CONSTRAINT "transactions_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "orders"("id");
ALTER TABLE
    "questions_responses" ADD CONSTRAINT "questions_responses_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "order_items" ADD CONSTRAINT "order_items_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "orders"("id");