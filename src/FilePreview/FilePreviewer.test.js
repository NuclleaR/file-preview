import React from 'react';
import { shallow } from 'enzyme';
import FilesPreviewer from './FilesPreviewer';
import { attachments } from '../__fixtures__/files';

function setup(props) {
  return shallow(<FilesPreviewer files={attachments} {...props} />);
}

describe('FilePreviewer component', () => {
  it('should render component', () => {
    const wrapper = setup();
    wrapper.debug(); //?
  });
});
