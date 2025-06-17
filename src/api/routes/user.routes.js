const { Router } = require('express');
const { create, deleteOne, getAll, getOne, updateOne, getMe, updateMe } = require('../controller/user/user.controller');
const { jwtProtect } = require('../middleware/jwt-protect.middleware');
const { authorizeRolesProtect } = require('../middleware/authorize-roles-protect.middleware');
const { getUserTodos, createUserTodo, updateUserTodo, deleteUserTodo } = require('../controller/user/todo.controller');
const { getUserFavorites, addItemInUserFavorites, removeItemFromUserfavorites, clearFavorites } = require('../controller/user/favorites.controller')

const {
	getUserAddresses,
	createUserAddress,
	deleteUserAddress,
	updateUserAddress,
} = require('../controller/user/address.controller');

const {
	getUserCompanies,
	updateUserCompany,
	createUserCompany,
	deleteUserCompany,
} = require('../controller/user/company.controller');
const { UserValidators } = require('../validator');

const router = Router();

router
	.route('/')
	.get(jwtProtect, authorizeRolesProtect(['ADMIN']), getAll)
	.post(
		jwtProtect,
		authorizeRolesProtect(['ADMIN']),
		UserValidators.UserValidator,
		UserValidators.AdminUserRoleValidator,
		create
	);

router.route('/me').get(jwtProtect, getMe).put(jwtProtect, updateMe);

router.route('/me/todos').get(jwtProtect, getUserTodos).post(jwtProtect, createUserTodo);
router.route('/me/todos/:id').put(jwtProtect, updateUserTodo).delete(jwtProtect, deleteUserTodo);

router.route('/me/addresses').get(jwtProtect, getUserAddresses).post(jwtProtect, createUserAddress);
router.route('/me/addresses/:id').put(jwtProtect, updateUserAddress).delete(jwtProtect, deleteUserAddress);

router.route('/me/companies').get(jwtProtect, getUserCompanies).post(jwtProtect, createUserCompany);
router.route('/me/companies/:id').put(jwtProtect, updateUserCompany).delete(jwtProtect, deleteUserCompany);

router.route('/me/favorites').get(jwtProtect, authorizeRolesProtect(['USER']), getUserFavorites)
router.route('/me/favorites/:id').post(jwtProtect, authorizeRolesProtect(['USER']), addItemInUserFavorites).delete(jwtProtect, authorizeRolesProtect(['USER']), removeItemFromUserfavorites);
router.route('/me/favorites/clear').put(jwtProtect, authorizeRolesProtect(['USER']), clearFavorites);

router
	.route('/:id')
	.get(jwtProtect, authorizeRolesProtect(['ADMIN']), getOne)
	.put(jwtProtect, authorizeRolesProtect(['ADMIN']), updateOne)
	.delete(jwtProtect, authorizeRolesProtect(['ADMIN']), deleteOne);

module.exports = router;
