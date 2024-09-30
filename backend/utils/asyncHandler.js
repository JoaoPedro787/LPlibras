const to = promise => (
    promise
        .then(data => ({data,error:null}))
        .catch(error => ({error,data:null}))
);

const errorHandler = (error, errorClass, message, next) => {
    if (error instanceof errorClass) {
        return next(new errorClass(message));
    }
    return next(error);
}

module.exports = {
    to,
    errorHandler
};