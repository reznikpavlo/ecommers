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

model UpdateProductRequest {
    productName?: string;
    productDescription?: string;
    productPrice?: float;
    productCategory?: string;
    productQuantity?: integer;
    stockQuantity?: int32;
}

//attachment models

model GetProductImgResponse {
    image: bytes;
}

model UploadProductImgRequest {
    image: bytes; // Binary data for the image
}

model UploadProductImgResponse {
    success: boolean;
    attachementId: string; 
    //or maybe will return the whole URL if we needed to
    //store attachments in different locations
}

//questions models

model PostQuestionRequest {
    question: string;
}

model GetQuestionResponse {
    questionId: int64;
    username: string;
    question: string;
    dateTime: DateTimeKnownEncoding;
}

model PostAnswerRequest {
    questionId:  int64;
    username: string;
    answer: string;
}

model PostAnswerResponse {
    answerId:  int64;
    username: string;
    answer: string;
    dateTime: DateTimeKnownEncoding;
}

//reviews models
