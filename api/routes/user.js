const express = require('express');
const router = express.Router();

const userController = require('../controllers/User.controller');

// User routes
router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/create', userController.create)
router.put('/update/:id', userController.updateById)
router.delete('/delete/:id', userController.updateById)


module.exports = router;