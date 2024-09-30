class apiError extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    };
};

class notFound extends apiError{
    constructor(message){
        super(message);
        this.statusCode = 404;
    };
};

class badRequest extends apiError{
    constructor(message){
        super(message);
        this.statusCode = 400;
    };
};

class internalError extends apiError{
    constructor(message){
        super(message);
        this.statusCode = 500;
    };
};

class conflictError extends apiError{
    constructor(message){
        super(message);
        this.statusCode = 409;
    };
};

module.exports={
    apiError,
    notFound,
    badRequest,
    internalError,
    conflictError
}