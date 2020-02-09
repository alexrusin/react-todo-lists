const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', userController.register);
router.post('/logout', authMiddleware, userController.logout);
router.get('/is-logged-in', authMiddleware, userController.isLoggedIn);
router.post('/login', userController.login);

module.exports = router;
