const express = require('express');
const multer = require('multer');
const imageController = require('../controllers/imageController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/upload', upload.single('image'), imageController.uploadImage);
router.post('/edit', imageController.editImage);

module.exports = router;
