import React, { useState } from 'react';
import ImagePreview from './ImagePreview';
import axios from 'axios';
import { saveAs } from 'file-saver';

function ImageEditor({ uploadedImage }) {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [editedImage, setEditedImage] = useState(null);

  const handleBrightnessChange = (e) => setBrightness(e.target.value);
  const handleContrastChange = (e) => setContrast(e.target.value);

  const handleSaveImage = async () => {
    try {
      const response = await axios.post('/api/images/edit', {
        filePath: uploadedImage,
        brightness,
        contrast
      });

      console.log('Edited image response:', response.data);  // 添加日志
      setEditedImage('http://localhost:5000'+response.data.outputFilePath);
    } catch (error) {
      console.error('Failed to save image', error);
    }
  };

  const handleDownload = async () => {
    if (editedImage) {
      try {
        const response = await axios.get(editedImage, { responseType: 'blob' });
        saveAs(response.data, 'edited-image.jpg');
      } catch (error) {
        console.error('Failed to download image', error);
      }
    }
  };

  return (
    <div>
      <div>
        <label>亮度:</label>
        <input type="range" min="0" max="200" value={brightness} onChange={handleBrightnessChange} />
      </div>
      <div>
        <label>對比度:</label>
        <input type="range" min="0" max="200" value={contrast} onChange={handleContrastChange} />
      </div>
      <ImagePreview uploadedImage={uploadedImage} brightness={brightness} contrast={contrast} />
      <button onClick={handleSaveImage}>保存圖片</button>
      {editedImage && (
        <div>
          <a onClick={handleDownload} download="edited-image.jpg">下載圖片</a>
        </div>
      )}
    </div>
  );
}

export default ImageEditor;
