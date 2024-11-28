const { badRequest } = require("../helpers/apiErrors");

// Regex para validação de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const loginBodyValidation = (req, _res, next) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return next(new badRequest('Entradas vázias ou inválidas'));
    }

    if (!emailRegex.test(email)) {
        return next(new badRequest('Email inválido'));
    }

    return next();
}

const signInBodyValidation = (req, _res, next) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return next(new badRequest('Entradas vázias ou inválidas'));
    }

    if (!emailRegex.test(email)) {
        return next(new badRequest('Email inválido'));
    }

    return next();
}

module.exports = {
    loginBodyValidation,
    signInBodyValidation
}
