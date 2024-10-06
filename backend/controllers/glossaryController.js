const glossaryModel = require('../models/glossaryModel');
const { notFound } = require('../helpers/apiErrors');
const { to, errorHandler } = require('../utils/asyncHandler');

const getGlossaryByModule = async (req, res, next) => {
    const id = req.params.id;

    const { error, data } = await to(glossaryModel.getGlossaryByModule(id));

    if (error) {
            return errorHandler(error, notFound, 'Glossário não encontrado', next);
    }

    return res.status(200).json(data);
}

module.exports = {
    getGlossaryByModule
}