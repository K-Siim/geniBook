import AppError from "./AppError.js";

class ExistingEntity extends AppError {
    constructor(message){
        super(message, 409);
    }
}

export default ExistingEntity;