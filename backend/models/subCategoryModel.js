const { notFound } = require('../helpers/apiErrors');

const connection = require('./connection');

const getSubCategories = async (id) => {
    const [result] = await connection.execute(`SELECT 
        * FROM 
        subCategoria 
        WHERE 
        i_id_categoria =?;`,
        [id]);

    if (result.length < 1) {
        throw new notFound();
    }

    return result;
}

module.exports = {
    getSubCategories
};
