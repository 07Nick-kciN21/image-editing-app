// ImageList.js
import React from 'react';
function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
}

export default ImageList;
