const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

exports.uploadImage = (req, res) => {
  const filePath = req.file.path;
  console.log('Image uploaded to:', filePath); // 添加日志
  res.json({ filePath });
};

exports.uploadFolder = (req, res) => {
  const files = req.files;
  const filePaths = []
  files.forEach(file => {
    filePaths.push(file.path);
  });
  res.json({ filePaths });
}

exports.editImage = async (req, res) => {
  const { filePath, brightness, contrast } = req.body;
  // /uploads/edited-${Date.now()}.jpg
  const outputFilePath = path.join('uploads', `edited-${Date.now()}.jpg`);
  console.log("outputFilePath:",outputFilePath);
  try {
    console.log('Editing image:', filePath);  // 添加日志
    await sharp(filePath)
      .modulate({ brightness: brightness / 100, contrast: contrast / 100 })
      .toFile(outputFilePath);

    console.log('Edited image saved to:', outputFilePath);  // 添加日志
    res.json({ outputFilePath: `/uploads/${path.basename(outputFilePath)}` });
  } catch (err) {
    console.error('Failed to process image', err);  // 添加日志
    res.status(500).json({ error: 'Failed to process image' });
  } finally {
    // Do not delete the original file to allow user to download it
  }
};
