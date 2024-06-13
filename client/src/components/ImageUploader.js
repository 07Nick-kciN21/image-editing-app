import React from 'react';
import axios from 'axios';

function ImageUploader({ setUploadedImage }) {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log("file:", e.target.files[0])
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await axios.post('/api/images/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        setUploadedImage(response.data.filePath);
      } catch (error) {
        console.error('Failed to upload image', error);
      }
    }
  };

  return (
    <div>
      {/* 上傳圖片，onChange:當輸入改變時觸發handleImageUpload函式 */}
      <input type="file" accept="image/*" onChange={handleImageUpload}  />
    </div>
  );
}

export default ImageUploader;
