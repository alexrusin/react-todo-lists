const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

const listController = require('../controllers/listController');

router.get('/', authMiddleware, listController.lists);
router.post('/', authMiddleware, listController.create);
router.delete('/:id', authMiddleware, listController.delete);

module.exports = router;