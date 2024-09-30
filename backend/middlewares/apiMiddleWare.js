const apiMiddleWare = (err,_req,res,_next)=>{
    console.log(err)
    const status = err.statusCode || 500;
    const message = status === err.statusCode ? err.message : 'Servidor com problema';

    return res.status(status).json({'message':message});
}

module.exports = apiMiddleWare;