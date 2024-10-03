const { notFound } = require('../helpers/apiErrors');

const connection = require('./connection');

const userService = require('../services/userService');

const newUser = async (nome, email, senha) => {
    const [result] = await connection.execute(`
            INSERT INTO usuario (s_nome_usuario, s_email_usuario, s_senha_usuario) 
            VALUES (?, ?, ?)`,
        [nome, email, senha]
    )

    if (result.affectedRows < 1) {
        throw new notFound();
    }

    const [getId] = await userService.getIdByEmail(email);

    await userService.statusTrigger(getId.i_id_usuario);
    await userService.categoriaTrigger(getId.i_id_usuario);

    //Adicionar rollback futuramente
    return getId;

};

const userCheck = async (email, senha) => {
    const [result] = await connection.execute(`
        SELECT * FROM 
        usuario 
        WHERE 
        s_email_usuario = ? 
        AND
        s_senha_usuario = ?`,
        [email, senha]);

    if (result.length < 1) {
        throw new notFound();
    }

    const [getId] = await userService.getIdByEmail(email);

    return getId;
};

const updateUser = async (id, nome, email, senha, fotoPerfil) => {

    const [result] = await connection.execute(`
        UPDATE 
        usuario SET 
        s_nome_usuario = ?, 
        s_email_usuario =?, 
        s_senha_usuario = ?, 
        s_fotoPerfil_usuario = ? 
        WHERE i_id_usuario = ? `,
        [nome, email, senha, fotoPerfil, id]);

    if (result.affectedRows < 1) {
        throw new notFound();
    }

    return result
}

const getUser = async (id) => {
    const [result] = await connection.execute(`
        SELECT s_nome_usuario,
        s_email_usuario,
        s_senha_usuario,
        s_fotoPerfil_usuario
        FROM 
        usuario 
        WHERE i_id_usuario = ?`,
        [id]);

    if (result.length < 1) {
        throw new notFound();
    }

    return result;
}

connection && console.log('Conexão sucedida');

module.exports = {
    newUser,
    userCheck,
    updateUser,
    getUser
};
