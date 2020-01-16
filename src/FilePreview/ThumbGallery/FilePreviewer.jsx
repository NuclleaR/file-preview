import React from 'react';
import classNames from 'classnames';
import { FILE_TYPES } from './constants';
import ImagePreview from './previewers/ImagePreview';

const FilePreviewer = ({ className, fileType, url }) => {
  let content;
  switch (fileType) {
    case FILE_TYPES.IMAGE:
      content = <ImagePreview src={url} />;
      break;
    default:
      content = <div className="preview-default">{fileType}</div>;
      break;
  }
  return <div className={classNames('previewer', className)}>{content}</div>;
};

export default FilePreviewer;
