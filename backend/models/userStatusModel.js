const { notFound } = require('../helpers/apiErrors');

const connection = require('./connection');

const getUserStatus = async (id) => {
    const [result] = await connection.execute(`
        SELECT 
            JSON_ARRAY(
                JSON_OBJECT(
                    'usuario',
                    JSON_OBJECT(
                        'nome_usuario', u.s_nome_usuario, 
                        'email_usuario', u.s_email_usuario,
                        'foto_perfil', u.s_fotoPerfil_usuario
                    )
                ),
                        JSON_OBJECT(
                            'modulos', (
                                SELECT 
                                    JSON_ARRAYAGG(
                                        JSON_OBJECT(
                                            'id_modulo', m.i_id_modulo,
                                            'nome_modulo', m.s_nome_modulo,
                                            'categorias', (
                                                SELECT 
                                                    JSON_ARRAYAGG(
                                                        JSON_OBJECT(
                                                            'id_categoria', c.i_id_categoria,
                                                            'nome_categoria', c.s_nome_categoria,
                                                            'imagem_categoria', c.s_imagem_categoria,
                                                            'status_categoria', cu.i_progresso_categoria
                                                        )
                                                    )
                                                FROM 
                                                    categoria c 
                                                LEFT JOIN 
                                                    categoriaUsuario cu ON cu.i_id_usuario = u.i_id_usuario AND cu.i_id_categoria = c.i_id_categoria
                                                WHERE 
                                                    c.i_id_modulo = m.i_id_modulo
                                            )
                                        )
                                    )
                                FROM 
                                    modulo m
                            )
                        )
            ) AS json_result
        FROM 
            usuario u
        WHERE 
            u.i_id_usuario = ?;`,
        [id]);

        if (result.length<1){
            throw new notFound();
        }

        return result[0].json_result;
};

module.exports = {
    getUserStatus
}

