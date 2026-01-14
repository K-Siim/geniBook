import AppError from "./AppError.js";

class NotFoundError extends AppError {
    constructor(message, statusCode = 404){
        super(message, 404);
    }
}

export default NotFoundError;