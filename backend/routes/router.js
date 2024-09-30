const express = require('express');

const router = express.Router();

//User
const userMiddleWare = require('../middlewares/userMiddleWare');
const userController = require('../controllers/userController');

router.get('/', (_req, res) => res.json({ message: 'Tudo certo' }));
//User
router.post('/user', userMiddleWare.signInBodyValidation, userController.newUser);
router.post('/user/check', userMiddleWare.loginBodyValidation, userController.userCheck)
router.get('/user/:id', userController.getUser)
router.put('/user/:id', userMiddleWare.signInBodyValidation, userController.updateUser)

module.exports = router;