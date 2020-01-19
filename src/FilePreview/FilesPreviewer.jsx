import React, { useEffect, useCallback, useState } from 'react';
import FilePreviewer from './Previewer/FilePreviewer';
import ThumbGallery from './ThumbGallery';
import { arrayOf, number } from 'prop-types';
import { FileShape } from './constants';

const FilesPreviewer = ({ files = [], activeFile }) => {
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
    <div>
      <div>
        <FilePreviewer
          fileType={files[active].fileType}
          url={files[active].url}
        />
      </div>
      <ThumbGallery
        files={files}
        active={active}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );
};

FilesPreviewer.propTypes = {
  files: arrayOf(FileShape),
  activeFile: number,
};

export default FilesPreviewer;
