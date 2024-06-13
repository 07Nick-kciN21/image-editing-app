const express = require('express');
const multer = require('multer');
const path = require('path');
const imageController = require('../controllers/imageController');


// const fileStorage = multer.diskStorage({
//     filename: (req, file, cb) => {
//     cb (null, file.fieldname);
//     }
// });
// multer() : 
//      dest / storage	設定要將檔案儲存的位置
//      fileFilter	    篩選符合條件的檔案
//      limits	        限制相關的上傳大小
//      preservePath	保存文件的完整路徑
const upload = multer({ dest: 'uploads/'});
const router = express.Router();
//  upload.single() : 檔案類型
router.post('/upload', upload.single('image'), imageController.uploadImage);
router.post('/edit', imageController.editImage);

module.exports = router;
