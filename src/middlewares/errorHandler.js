import validationError from '../utils/validationError.js';

const errorHandler = (error, request, response, next) => {
    response.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error', 
        details: error instanceof validationError ? error.details : undefined, 
    });
};

export default errorHandler;