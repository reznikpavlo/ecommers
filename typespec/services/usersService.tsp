import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/errorModels.tsp";
import "../models/userModels.tsp";


using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Users service",
  })
@route("/api/users")
namespace UsersService {
    @get
    @route("/") op getUsers(): UserDetailsResponse[] | InvalidRequestError | UnauthorizedError;

    @get
    @route("/search") op searchUsers(@query query: string): UserDetailsResponse[] | InvalidRequestError | UnauthorizedError;

    @get
    @route("/{user_id}")
    op getUserById(@path user_id: string): UserDetailsResponse | InvalidRequestError | UnauthorizedError | NotFoundError;

    @patch
    @route("/{user_id}")
    op updateUserDetails(@path user_id: string, @body update: UpdateUserRequest): UserDetailsResponse | InvalidRequestError | UnauthorizedError | NotFoundError;

    @delete
    @route("/{user_id}")
    op deleteUser(@path user_id: string): void | InvalidRequestError | UnauthorizedError;

} 