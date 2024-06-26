import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

model ProductOverviewResponse {
    productId: int64;
    productName: string;
    productDescription?: string;
    productPrice: float;
    productCategory: string;
    productAttachements: string[]; // array of product attachments' names or links
}

model ProductDetailsResponse extends ProductOverviewResponse {
    stockQuantity: int32;
    categoryName: string;
}

model CreateProductRequest {
    productName: string;
    productDescription?: string;
    productPrice: float;
    productCategory: string;
    productQuantity: integer;
}

model UploadProductImgRequest {
    productId: string;
    image: bytes; // Binary data for the image
}

model UploadProductImgResponse {
    success: boolean;
    attachementName: string; 
    //or maybe will return the whole URL if we needed to
    //store attachments in different locations
}