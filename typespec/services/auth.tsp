import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/user.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;

#suppress "@typespec/http/no-service-found" ""

@service({
    title: "Auth service",
  })
@route("/api/auth")
namespace AuthService {
    @post @route("/signUp") op signUp(signUpReq: SignUpRequest): AuthResponse;
}
