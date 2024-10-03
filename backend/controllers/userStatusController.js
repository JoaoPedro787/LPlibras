const userStatusModel = require('../models/userStatusModel');
const { conflictError, notFound } = require('../helpers/apiErrors');
const { to, errorHandler } = require('../utils/asyncHandler');

const getUserStatus = async (req, res, next) => {
    const id = req.params.id;

    const { error, data } = await to(userStatusModel.getUserStatus(id));

    if (error) {
            return errorHandler(error, notFound, 'Erro ao pegar informações do usuário', next);
    }

    return res.status(200).json(data);
}

module.exports = {
    getUserStatus
}