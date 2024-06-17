import React from 'react';
import axios from 'axios';

function ImageUploader({ setUploadedImage }) {
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    console.log("e.target.files:", e.target.files);
    console.log("file:", e.target.files[1]);
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await axios.post('/api/images/upload/file', formData, {
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

  const handlefolderUpload = async (e) => {
    const files = e.target.files;
    if(files){
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('images', files[i]);
      }
      const response = await axios.post('/api/images/upload/folder', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("res: ", response);
      console.log("e.target.files:", e.target.files);
      console.log("file:", e.target.files[0]);
      // try{
      //   const response = await axios.post('/api/images/upload/folder', formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   });
      //   console.log("res: ", response);
      //   console.log("e.target.files:", e.target.files);
      //   console.log("file:", e.target.files[0]);
      // } catch (error){
      //   console.error('Failed to upload image', error);
      // }
    }
  }

  return (
    <div>
      {/* 上傳圖片，onChange:當輸入改變時觸發handleImageUpload函式 */}
      <input type="file" accept="image/*" onChange={handleImageUpload}  />
      {/* 上傳圖片資料夾 */}
      <div>
        <label htmlFor="folderUpload">上傳圖片資料夾:</label>
        <input 
          type="file" 
          id="folderUpload" 
          webkitdirectory="true" 
          mozdirectory="true" 
          onChange={handlefolderUpload} 
        />
      </div>
    </div>
  );
}

export default ImageUploader;
