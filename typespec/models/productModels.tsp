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
    sellerUsername: string;
    stats: [ int32, float32 ];
}

model ProductDetailsResponse extends ProductOverviewResponse {
    stockQuantity: int32;
    productDescription?: string; //new
    productMaterial?: string; //new
    productWeight?: decimal; //new
    productWidth?: decimal; //new
    productLenght?: decimal; //new
    productHeight?: decimal; //new
}

model CreateProductRequest {
    productName: string;
    productPrice: float;
    productCategory: string;
    productQuantity: integer;
    productDescription?: string;
    productMaterial?: string; //new
    productWeight?: decimal; //new
    productWidth?: decimal; //new
    productLenght?: decimal; //new
    productHeight?: decimal; //new
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

model QuestionRequest {
    question: string;
}

model QuestionResponse {
    questionId: int64;
    username: string;
    question: string;
    dateTime: DateTimeKnownEncoding;
}

model AnswerToQuestionRequest {
    username: string;
    answer: string;
}

model AnswerToQuestionResponse extends AnswerToQuestionRequest{
    answerId:  int64;
    dateTime: DateTimeKnownEncoding;
}

//reviews models
model ReviewRequest {
    rate: 1 | 2 | 3 | 4 | 5;
    comment?: string;
}

model ReviewResponse extends ReviewRequest {
    reviewId: int16;
    username: string;
    dateTime: DateTimeKnownEncoding;
}

model AnswerToReviewRequest {
    username: string;
    answer: string;
}

model AnswerToReviewResponse extends AnswerToReviewRequest {
    answerId:  int64;
    dateTime: DateTimeKnownEncoding;
}