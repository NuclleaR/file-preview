import React from 'react';
import { string, number, bool } from 'prop-types';
import classNames from 'classnames';

import { FILE_TYPES } from './constants';

const Thumbnail = ({ fileType, url, className, active }) => {
  console.log('active:', active);
  let content;
  switch (fileType) {
    case FILE_TYPES.IMAGE:
      content = (
        <div
          className="thumbnail-image"
          style={{ backgroundImage: `url(${url})` }}
        />
      );
      break;
    default:
      content = <div className="thumbnail-default">{fileType}</div>;
      break;
  }

  return (
    <div className={classNames('thumbnail', className, { active })}>
      {content}
    </div>
  );
};

Thumbnail.propTypes = {
  fileType: string,
  id: number,
  url: string,
  active: bool,
};

export default Thumbnail;
