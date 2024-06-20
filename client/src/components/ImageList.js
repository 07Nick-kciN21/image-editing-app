// ImageList.js
import React, { useState } from 'react';
function ImageList({ images, onImageClick }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-list">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} onClick={() => onImageClick(image)} />
      ))}
      {selectedImage && (
        <div className="largeImageContainer">
          <img id="largeImage" src={selectedImage} alt="Large view" />
        </div>
      )}
    </div>
    
  );
}

export default ImageList;
