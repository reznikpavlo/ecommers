import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/errorModels.tsp";
import "../models/userModels.tsp";
import "../models/productModels.tsp";
import "../models/cartModels.tsp";


using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Cart service",
  })
@route("/api/cart")
namespace CartService {
    @get
    @route("/") op getCartItems(): ProductOverviewResponse[] | InvalidRequestError | UnauthorizedError;

    @post
    @route("/items/{product_id}") op addItemToCart(@path product_id: string): void | InvalidRequestError | UnauthorizedError | NotFoundError;

    @patch
    @route("/items/{product_id}") op updateItemQuantity(@path product_id: string, @body updateCartItemReq: UpdateCartItemRequest): void | InvalidRequestError | UnauthorizedError | NotFoundError;

    @delete
    @route("/items/{product_id}") op deleteItemFromCart(@path product_id: string): void | InvalidRequestError | UnauthorizedError | NotFoundError;

} 