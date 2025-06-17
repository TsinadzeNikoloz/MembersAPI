const { Router } = require('express');
const { registration, login } = require('../controller/auth/auth.controller');
const { UserValidators } = require('../validator');

const router = Router();

router.route('/registration').post(UserValidators.UserValidator, UserValidators.UserRoleValidator, registration);

router.route('/login').post(login);

module.exports = router;
