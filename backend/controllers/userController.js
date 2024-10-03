const userModel = require('../models/userModel');
const { conflictError, notFound } = require('../helpers/apiErrors');
const { to, errorHandler } = require('../utils/asyncHandler');

const newUser = async (req, res, next) => {
    const { nome, email, senha } = req.body;

    const { error, data } = await to(userModel.newUser(nome, email, senha));

    if (error) {
        //Fazer implementação rollback
        if (error.code === 'ER_DUP_ENTRY') {
            return next(new conflictError('Usuário já cadastrado'));
        }
        else {
            return errorHandler(error, notFound, 'Erro ao criar usuário', next);
        }
    }

    return res.status(200).json({ message: 'Conta cadastrada com sucesso!', id: data.i_id_usuario });
}

const userCheck = async (req, res, next) => {
    const { email, senha } = req.body

    const { error, data } = await to(userModel.userCheck(email, senha));

    if (error) {
        return errorHandler(error, notFound, 'Usuário não encontrado', next);
    }

    return res.status(200).json({ message: 'Bem vindo de volta!', id: data.i_id_usuario });
}

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { nome, email, senha, fotoPerfil } = req.body;

    const { error } = await to(userModel.updateUser(id, nome, email, senha, fotoPerfil));

    if (error) {
        return errorHandler(error, notFound, 'Erro ao atualizar informações!', next);
    }

    return res.status(201).json({ message: 'Dados atualizados!' });

}

const getUser = async(req,res,next)=>{
    const id = req.params.id;

    const {error,data} = await to(userModel.getUser(id));

    if (error){
        return errorHandler(error, notFound, 'Erro ao pegar informações do usuário!', next);
    }

    return res.status(200).json(data);
}

module.exports = {
    newUser,
    userCheck,
    updateUser,
    getUser
}