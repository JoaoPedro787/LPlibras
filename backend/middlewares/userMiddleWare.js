const { badRequest } = require("../helpers/apiErrors");

const loginBodyValidation = (req, _res, next) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return next(new badRequest('Entradas vázias ou inválidas'));
    }

    return next();
}

const signInBodyValidation = (req,_res,next) => {
    const { nome, email, senha } = req.body;

    if (!nome | !email || !senha) {
        return next(new badRequest('Entradas vázias ou inválidas'));
    }

    return next();
}

module.exports = {
    loginBodyValidation,
    signInBodyValidation
}