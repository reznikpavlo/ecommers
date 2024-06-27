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
  //handle product
    @get
    @route("/") op getProducts():  ProductOverviewResponse[] | InvalidRequestError;

    @post
    @route("/") op createProduct(createProductReq :CreateProductRequest):  ProductDetailsResponse | InvalidRequestError | UnauthorizedError;

    @get
    @route("/{product_id}") op getProductById(@path product_id: string):  ProductDetailsResponse | InvalidRequestError;

    @put
    @route("/{product_id}") op updateProductById(@path product_id: string, updateProductReq: UpdateProductRequest):  ProductDetailsResponse | InvalidRequestError | UnauthorizedError;

    @delete
    @route("/{product_id}") op deleteProductById(@path product_id: string):  void | InvalidRequestError | UnauthorizedError;

    //handle attachments
    @post
    @route("/{product_id}/attachement") op uploadProductAttachment(@path product_id: string, uploadProductImgReq: UploadProductImgRequest, 
      @header("Content-Type") contentType: 
      "image/jpeg" | 
      "image/jpg" |
       "image/png"
  ) : UploadProductImgResponse | InvalidRequestError | UnauthorizedError;

    
    @get
    @route("/{product_id}/attachement/{attachement_id}") op getProductAttachmentById( @path product_id: string, @path attachement_id: string) : GetProductImgResponse & {
      @header("Content-Type") contentType: 
      "image/jpeg" | 
      "image/jpg" |
       "image/png"
  } | NotFoundError | InvalidRequestError;

  @delete
  @route("/{product_id}attachement/{attachement_id}") op deleteProductAttachmentById(@path product_id: string, @path attachement_id: string):  void | InvalidRequestError | UnauthorizedError | NotFoundError;

  //handle questions
  @post
  @route("/{product_id}/questions") op postProductQuestion(@path product_id: string):  void | InvalidRequestError | UnauthorizedError | NotFoundError;

} 