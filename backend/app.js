const express = require('express');
const cors = require('cors');
require('express-async-errors');

const router = require('./routes/router');
const apiMiddleWare = require('./middlewares/apiMiddleWare');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);

app.use(apiMiddleWare);

module.exports = app;
