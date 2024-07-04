import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/errorModels.tsp";
import "../models/orderModels.tsp";


using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Orders service",
  })
@route("/api/orders")
namespace CartService {
    @get
    @route("/") op getOrders(): OrderOverviewResponse[] | InvalidRequestError | UnauthorizedError;

    @get
    @route("/items/{order_id}") op getOrderById(@path order_id: string): OrderDetailsResponse | InvalidRequestError | UnauthorizedError | NotFoundError;

    @patch
    @route("/items/{product_id}/cancel") op cancelOrder(@path product_id: string): CancelOrderResponse | InvalidRequestError | UnauthorizedError | NotFoundError;

    @patch
    @route("/items/{product_id}/update") op updateOrder(@path product_id: string, @body updateOrderReq: UpdateOrderRequest): UpdateOrderResponse | InvalidRequestError | UnauthorizedError | NotFoundError;
} 