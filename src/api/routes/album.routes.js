const { Router } = require('express');
const { create, deleteOne, getAll, getOne, updateOne } = require('../controller/album/album.controller');
const { jwtProtect } = require('../middleware/jwt-protect.middleware');
const { AlbumValidators } = require('../validator');

const router = Router();

router.route('/').get(getAll).post(jwtProtect, AlbumValidators.CreateAlbumValidator, create);

router
	.route('/:id')
	.get(getOne)
	.put(jwtProtect, AlbumValidators.UpdateAlbumValidator, updateOne)
	.delete(jwtProtect, AlbumValidators.DeleteAlbumValidator, deleteOne);

module.exports = router;
