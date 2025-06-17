const { Router } = require('express');
const { getAlbumPhotos, create, deleteOne } = require('../controller/album/photo.controller');
const { jwtProtect } = require('../middleware/jwt-protect.middleware');
const { AlbumPhotoValidators } = require('../validator/album/photo');

const router = Router();

router.route('/').post(jwtProtect, AlbumPhotoValidators.CreateAlbumPhotoValidator, create);

router.route('/album/:album_id').get(getAlbumPhotos);

router.route('/:id').delete(jwtProtect, AlbumPhotoValidators.DeleteAlbumPhotoValidator, deleteOne);

module.exports = router;
