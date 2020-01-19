import React from 'react';
import { arrayOf, number, func } from 'prop-types';
import Thumbnail from './Thumbnail';
import { FileShape } from '../constants';

const ThumbGallery = ({ files = [], active, onPrev, onNext }) => {
  return (
    <div className="file-gallery-wrapper">
      <button className="prev" onClick={onPrev}>
        prev
      </button>
      <div className="thumb-gallery">
        {files.map((file, index) => {
          return (
            <Thumbnail
              key={file.id}
              url={file.thumbnailUrl}
              active={index === active}
              fileType={file.fileType}
            />
          );
        })}
      </div>
      <button className="next" onClick={onNext}>
        next
      </button>
    </div>
  );
};

ThumbGallery.propTypes = {
  files: arrayOf(FileShape).isRequired,
  active: number,
  onPrev: func,
  onNext: func,
};

export default ThumbGallery;
