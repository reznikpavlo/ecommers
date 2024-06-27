import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";
import "./services/authService.tsp";
import "./services/usersService.tsp"; 
import "./services/productsService.tsp"; 


using TypeSpec.Http;
using TypeSpec.Rest;

using AuthService;
using ProductsService;

@service({
  title: "E-Commerce service",
})
@server("https://ecommerce.com", "Single server endpoint for the eCommerce service")
namespace ECommerce;