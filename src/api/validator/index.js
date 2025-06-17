const UserValidators = require('./user');
const UserAddressValidators = require('./user/address');
const UserCompanyValidators = require('./user/company');
const UserTodoValidators = require('./user/todo');

const PostValidators = require('./post');
const PostCommentValidators = require('./post/comment');

const AlbumValidators = require('./album');
const AlbumPhotoValidators = require('./album/photo');

const AuthValidators = require('./auth');

module.exports = {
	AuthValidators,
	UserValidators,
	UserAddressValidators,
	UserCompanyValidators,
	UserTodoValidators,
	PostValidators,
	PostCommentValidators,
	AlbumValidators,
	AlbumPhotoValidators,
};
