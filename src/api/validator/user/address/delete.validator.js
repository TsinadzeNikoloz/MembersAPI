const { validationResult, param } = require('express-validator');

const DeleteUserAddressValidator = [
	param('id').isMongoId().not().isEmpty(),

	(request, response, next) => {
		const errors = validationResult(request);

		if (!errors.isEmpty()) {
			return response.status(422).json({ success: false, errors: errors.array() });
		}

		return next();
	},
];

module.exports = DeleteUserAddressValidator;
