import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/authModels.tsp";
import "../models/errorModels.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Auth service",
  })
@route("/api/auth")
namespace AuthService {
    @post
    @route("/sign_up") op signUp(signUpReq: SignUpRequest): AuthResponse | InvalidRequestError | UnauthorizedError;

    @post
    @route("/sign_in") op signIn(signInReq: SignInRequest): AuthResponse | InvalidRequestError | UnauthorizedError;

    @get
    @route("/sign_out") op signOut(): void | InvalidRequestError | UnauthorizedError;

    @post
    @route("/recover_password") op recoverPassword(passRecoverRequest: PassRecoverRequest): void | InvalidRequestError | UnauthorizedError;
} 

