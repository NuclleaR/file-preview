import React from 'react';
import { string } from 'prop-types';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const defaultProps = {
  zoomIn: { step: 10 },
  zoomOut: { step: 10 },
  wheel: { step: 1 },
};

const ImagePreview = ({ url, alt, ...props }) => (
  <TransformWrapper {...defaultProps} {...props}>
    {({ zoomIn, zoomOut, resetTransform }) => (
      <React.Fragment>
        <TransformComponent>
          <img src={url} alt={alt} />
        </TransformComponent>
        <div className="tools">
          <button onClick={zoomOut}>-</button>
          <button onClick={resetTransform}>reset</button>
          <button onClick={zoomIn}>+</button>
        </div>
      </React.Fragment>
    )}
  </TransformWrapper>
);

ImagePreview.propTypes = {
  url: string.isRequired,
  alt: string,
};

export default ImagePreview;
