import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/errorModels.tsp";
import "../models/userModels.tsp";
import "../models/productModels.tsp";


using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Wishlist service",
  })
@route("/api/wishlist")
namespace CartService {
    @get
    @route("/") op getWishlistItems(): ProductOverviewResponse[] | InvalidRequestError | UnauthorizedError;

    @post
    @route("/items/{product_id}") op addItemToWishlist(@path product_id: string): void | InvalidRequestError | UnauthorizedError | NotFoundError;


    @delete
    @route("/items/{product_id}") op deleteItemFromWishlist(@path product_id: string): void | InvalidRequestError | UnauthorizedError | NotFoundError;

} 