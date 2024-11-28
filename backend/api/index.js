const express = require('express');
const cors = require('cors');

require('express-async-errors');
require('dotenv').config();

const router = require('../routes/router');
const apiMiddleWare = require('../middlewares/apiMiddleWare');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(apiMiddleWare);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server rodando na porta ${PORT}`);
});

module.exports = app;
