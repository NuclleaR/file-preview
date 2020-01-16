import React from 'react';
import { string } from 'prop-types';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ImagePreview = ({ src, alt }) => (
  <TransformWrapper>
    <TransformComponent>
      <img src={src} alt={alt} />
    </TransformComponent>
  </TransformWrapper>
);

ImagePreview.propTypes = {
  src: string,
};

export default ImagePreview;
