const { notFound } = require('../helpers/apiErrors');
const connection = require('../models/connection');

const getIdByEmail = async (email) => {
    const [result] = await connection.execute(`
        SELECT i_id_usuario 
        from usuario 
        WHERE s_email_usuario = ?`,
        [email]);

    if (result.length < 1) {
        throw new notFound();
    }

    return result;
}

module.exports = {
    getIdByEmail
}