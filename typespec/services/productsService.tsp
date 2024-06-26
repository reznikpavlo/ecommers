import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/productModels.tsp";
import "../models/errorModels.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Products service",
  })
@route("/api/products")
namespace ProductsService {
    @get
    @route("/") op getProducts():  ProductOverviewResponse[] | InvalidRequestError;

    @post
    @route("/") op createProduct(createProductReq :CreateProductRequest):  ProductDetailsResponse | InvalidRequestError | UnauthorizedError;

    @get
    @route("/{product_id}") op getProductById(@path product_id: string):  ProductDetailsResponse | InvalidRequestError;

    @patch
    @route("/{product_id}") op updateProductById(@path product_id: string, updateProductReq: UpdateProductRequest):  ProductDetailsResponse | InvalidRequestError | UnauthorizedError;

    @delete
    @route("/{product_id}") op deleteProductById(@path product_id: string):  void | InvalidRequestError | UnauthorizedError;



} 