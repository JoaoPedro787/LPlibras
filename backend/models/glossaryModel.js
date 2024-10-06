const { notFound } = require('../helpers/apiErrors');

const connection = require('./connection');

const getGlossaryByModule = async (id) => {
    const [result] = await connection.execute(`SELECT 
        i_id_glossario,s_nome_glossario 
        FROM glossario 
        WHERE i_id_modulo = ?;`, 
        [id]);
    
    if (result.length < 1){
        throw new notFound();
    }

    return result;

}

module.exports = {
    getGlossaryByModule
};
