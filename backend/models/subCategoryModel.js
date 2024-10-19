const { notFound } = require('../helpers/apiErrors');
const connection = require('./connection');

const getSubCategories = async (id) => {
    const [result] = await connection.execute(`
        SELECT 
    JSON_OBJECT(
        'subCategoria', (
            SELECT JSON_ARRAYAGG(
                JSON_OBJECT(
                    'id_sub', sub.i_id_subCategoria,
                    'nome_sub', sub.s_nome_subCategoria,
                    'fases', (
                        SELECT JSON_ARRAYAGG(
                            JSON_OBJECT(
                                'id_sub', f.i_id_subCategoria,
                                'id', f.i_id_fase,
                                'tipo', f.i_tipo_fase,
                                'nome', f.s_nome_fase
                            )
                        )
                        FROM fase f
                        WHERE f.i_id_subCategoria = sub.i_id_subCategoria
                    )
                )
            )
            FROM subCategoria sub
            WHERE sub.i_id_categoria = ?
        )
    ) AS result;`,
        [id]
    );

    if (result.length < 1) {
        throw new notFound();
    }

    return result[0].result;
}

module.exports = {
    getSubCategories
};
