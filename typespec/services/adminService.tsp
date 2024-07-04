import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/errorModels.tsp";
import "../models/adminModels.tsp";


using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Admin service",
  })
@route("/api/admin")
namespace AdminService {
    @patch
    @route("/suspend/user/{user_id}") op suspendUser(@path user_id: string): void | InvalidRequestError | UnauthorizedError | NotFoundError;

    @patch
    @route("/suspend/product/{product_id}") op suspendProduct(@path product_id: string): void | InvalidRequestError | UnauthorizedError | NotFoundError;

    @get
    @route("/transactions") op getAllTransactions(): TransactionResponse[] | InvalidRequestError | UnauthorizedError | NotFoundError;
} 