const express = require('express');

const router = express.Router();

//User
const userMiddleWare = require('../middlewares/userMiddleWare');
const userController = require('../controllers/userController');

//UserStatus
const userStatusController = require('../controllers/userStatusController');

//Glossary
const glossaryController = require('../controllers/glossaryController');

//User
router.post('/user', userMiddleWare.signInBodyValidation, userController.newUser);
router.post('/user/check', userMiddleWare.loginBodyValidation, userController.userCheck)
router.get('/user/:id', userController.getUser)
router.put('/user/:id', userMiddleWare.signInBodyValidation, userController.updateUser)

//UserStatus
router.get('/user/:id/status', userStatusController.getUserStatus)

// Glossary
router.get('/glossary/:id', glossaryController.getGlossaryByModule)

module.exports = router;