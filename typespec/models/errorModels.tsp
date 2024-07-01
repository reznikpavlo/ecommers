model ErrorResponse {
    code: int32;
    message: string;
  }
  
  model InvalidRequestError extends ErrorResponse {
    code: 400;
    message: "Invalid Request";
  }
  
  model UnauthorizedError extends ErrorResponse {
    code: 401;
    message: "Unauthorized";
  }
  
  model NotFoundError extends ErrorResponse {
    code: 404;
    message: "Not Found";
  }
  