import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageEditor from './components/ImageEditor';

function App() {
  const [uploadedImage, setUploadedImage] = React.useState(null);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);

  const handleImageUpload = (image) => {
    setUploadedImage(image);
    // Reset brightness and contrast when a new image is uploaded
    setBrightness(100);
    setContrast(100);
  };
  return (
    <div className="App">
      <h1>圖片編輯器</h1>
      <ImageUploader setUploadedImage={handleImageUpload} />
      {uploadedImage && (
          <ImageEditor 
            uploadedImage={uploadedImage}
            brightness={brightness}
            contrast={contrast}
            setBrightness={setBrightness}
            setContrast={setContrast}
          />
        )}
    </div>
  );
}

export default App;
