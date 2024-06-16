import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "../models/user.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;

/**
 * This is a sample server Petstore server.
 */
@service({
  title: "Pet Store Service",
})
@server("https://example.com", "Single server endpoint")
namespace PetStore;