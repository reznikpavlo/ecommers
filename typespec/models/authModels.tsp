import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

model SignUpRequest {
    userName: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    password: string;
    country: string;
    city: string;
    province: string;
    street:string;
    unitNumber?: string;
    zipCode: string;
  }

  model AuthResponse {
    token: string;
  }
  
  model SignInRequest {
    userNameOrEmail: string;
    password: string;
  }

  model PassRecoverRequest {
    userNameOrEmail: string;
  }
  