import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/errorModels.tsp";
import "../models/productModels.tsp";
import "../models/orderModels.tsp";
import "../models/sellerModels.tsp";


using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Seller service",
  })
@route("/api/sellers")
namespace SellerService {
    @get
    @route("/inventory") op getInventory(): ProductDetailsResponse[] | InvalidRequestError | UnauthorizedError | NotFoundError;

    @get
    @route("/orders") op getOrders(): OrderDetailsResponse[] | InvalidRequestError | UnauthorizedError | NotFoundError;

    @put
    @route("/orders/{order_id}/update") op updateOrder(@path order_id: string, @body updateOrderReq: UpdateOrder): UpdateOrder | InvalidRequestError | UnauthorizedError | NotFoundError;
} 