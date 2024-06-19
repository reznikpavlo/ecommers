import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

model SignUpRequest {
    name: string;
    email: string;
    password?: string;
  }
  
  model SignInRequest {
    email: string;
    password: string;
  }

  model AuthResponse {
    token: string;
  }
  