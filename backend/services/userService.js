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

const statusTrigger = async (id) => {
    const [result] = await connection.execute(`
        INSERT INTO 
        statusUsuario (i_id_usuario) 
        VALUES (?)`,
        [id]);

    if (result.affectedRows < 1) {
        throw new notFound();
    }
}

const categoriaTrigger = async (id) => {
    const [result] = await connection.execute(`
        INSERT INTO 
        categoriaUsuario (i_id_categoria,i_id_usuario)
        VALUES (1,?)`,
        [id]);

    if (result.affectedRows < 1) {
        throw new notFound();
    }
}

module.exports = {
    getIdByEmail,
    statusTrigger,
    categoriaTrigger
}