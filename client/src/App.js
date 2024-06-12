import React from 'react';
import ImageUploader from './components/ImageUploader';
import ImageEditor from './components/ImageEditor';

function App() {
  const [uploadedImage, setUploadedImage] = React.useState(null);

  return (
    <div className="App">
      <h1>圖片編輯器</h1>
      <ImageUploader setUploadedImage={setUploadedImage} />
      {uploadedImage && <ImageEditor uploadedImage={uploadedImage} />}
    </div>
  );
}

export default App;
