const subCategoryModel = require('../models/subCategoryModel');
const { notFound } = require('../helpers/apiErrors');
const { to, errorHandler } = require('../utils/asyncHandler');

const getSubCategories = async (req, res, next) => {
    const id = req.params.id;

    const { error, data } = await to(subCategoryModel.getSubCategories(id));

    if (error) {
            return errorHandler(error, notFound, 'Subcategoria não encontrada ', next);
    }

    return res.status(200).json(data);
}

module.exports = {
    getSubCategories
}