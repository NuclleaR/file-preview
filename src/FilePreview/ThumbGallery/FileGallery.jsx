import React, { useState, useEffect, useCallback } from 'react';
import { arrayOf, shape, number, string } from 'prop-types';
import Thumbnail from './Thumbnail';
import FilePreviewer from './FilePreviewer';

const FileGallery = ({ files = [], activeFile }) => {
  const [active, setActive] = useState(activeFile || 0);

  useEffect(() => {
    if (activeFile != null) {
      setActive(activeFile);
    }
  }, [activeFile]);

  const onNext = useCallback(() => {
    let index = active + 1; //?
    if (index > files.length - 1) {
      index = 0;
    }
    setActive(index);
  }, [active, setActive, files.length]);

  const onPrev = useCallback(() => {
    let index = active - 1;
    if (index < 0) {
      index = files.length - 1;
    }
    setActive(index);
  }, [active, setActive, files.length]);

  return (
    <div className="file-gallery-wrapper">
      <div>
        <FilePreviewer
          fileType={files[active].fileType}
          url={files[active].url}
        />
      </div>
      <button className="prev" onClick={onPrev}>
        prev
      </button>
      <div className="thumb-gallery">
        {files.map((file, index) => {
          console.log('active', index === active);
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

FileGallery.propTypes = {
  files: arrayOf(
    shape({
      albumId: number,
      id: number,
      title: string,
      url: string,
      thumbnailUrl: string,
    }),
  ).isRequired,
  activeFile: number,
};

export default FileGallery;
