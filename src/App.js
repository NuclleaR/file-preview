import React from 'react';

import ThumbGallery from './FilePreview/ThumbGallery/FileGallery';
import './App.css';
import { photos } from './__fixtures__/photos';
import { FILE_TYPES } from './FilePreview/ThumbGallery/constants';

function App() {
  return (
    <div className="App">
      <ThumbGallery
        files={photos.map(photo => {
          photo.fileType = FILE_TYPES.IMAGE;
          return photo;
        })}
      />
    </div>
  );
}

export default App;
