import React from 'react';

function ImagePreview({ uploadedImage, brightness, contrast }) {
  const filterStyle = {
    filter: `brightness(${brightness}%) contrast(${contrast}%)`
  };

  // 使用filter: brightness()跟contrast()動態調整圖片
  return (
    <div>       
      <img src={uploadedImage} alt="Preview" style={filterStyle} />
    </div>
  );
}

export default ImagePreview;
