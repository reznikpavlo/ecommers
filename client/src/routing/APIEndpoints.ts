export const API_URL = "https://localhost/chat-api";

export const GET_PRODUCT_BY_ID = (productId: string) =>
    `${API_URL}/products/${productId}`;