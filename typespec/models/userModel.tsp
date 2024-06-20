import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

model UserDetailsResponse {
    userName: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    country: string;
    city: string;
    province: string;
    street:string;
    unitNumber?: string;
    zipCode: string;
  }

  model UpdateUserRequest {
    userName?: string;
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    country?: string;
    city?: string;
    province?: string;
    street?:string;
    unitNumber?: string;
    zipCode?: string;
  }