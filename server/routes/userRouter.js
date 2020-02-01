const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/logout', userController.logout);
router.post('/is-logged-in', userController.isLoggedIn);
router.post('/login', userController.login);

module.exports = router;
