import React from 'react';

import './App.css';
import { attachments } from './__fixtures__/files';
import FilesPreviewer from './FilePreview';

function App() {
  return (
    <div className="App">
      <FilesPreviewer files={attachments} />
    </div>
  );
}

export default App;
