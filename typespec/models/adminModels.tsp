model TransactionResponse {
    transactionId: int64;
    transactionType: string;
    paymentMethod: string;
    orderId: int64;
    payerId: int64;
    payeeId: int64;
    payerUsername: string;
    payeeUsername: string;
    amount: decimal;
    transactionStatus: string;
    transactionTime: DateTimeKnownEncoding;
}