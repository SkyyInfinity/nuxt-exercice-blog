const express = require('express');
const router = express.Router();

const postController = require('../controllers/post.controller')

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);

router.post('/create', postController.create)
router.put('/update/:id', postController.updateById)
router.delete('/delete/:id', postController.updateById)


module.exports = router;