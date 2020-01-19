import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import CustomNavigation from '../components/Navigation';

const PdfPreviewer = ({ url }) => {
  return (
    <PDFViewer
      document={{
        url: 'https://cors-anywhere.herokuapp.com/' + url,
      }}
      navigation={CustomNavigation}
      navbarOnTop
      scaleStep={0.5}
      maxScale={3}
      minScale={0.5}
      canvasCss="customCanvas"
    />
  );
};

export default PdfPreviewer;
