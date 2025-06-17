const { Router } = require('express');
const { create, getPostComments, updateOne, deleteOne } = require('../controller/post/comment.controller');
const { jwtProtect } = require('../middleware/jwt-protect.middleware');
const { PostCommentValidators } = require('../validator/post/comment');

const router = Router();

router.route('/').post(jwtProtect, PostCommentValidators.CreatePostCommentValidator, create);

router.route('/post/:post_id').get(getPostComments);

router
	.route('/:id')
	.put(jwtProtect, PostCommentValidators.UpdatePostCommentValidator, updateOne)
	.delete(jwtProtect, PostCommentValidators.DeletePostCommentValidator, deleteOne);

module.exports = router;
