const { Router } = require('express');
const { create, deleteOne, getAll, getOne, updateOne } = require('../controller/post/post.controller');
const { jwtProtect } = require('../middleware/jwt-protect.middleware');
const { PostValidators } = require('../validator');

const router = Router();

router.route('/').get(getAll).post(jwtProtect, PostValidators.CreatePostValidator, create);

router
	.route('/:id')
	.get(getOne)
	.put(jwtProtect, PostValidators.UpdatePostValidator, updateOne)
	.delete(jwtProtect, PostValidators.DeletePostValidator, deleteOne);

module.exports = router;
