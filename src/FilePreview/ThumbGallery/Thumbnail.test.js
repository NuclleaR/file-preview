import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from './Thumbnail';

function setup(props) {
  return shallow(<Thumbnail {...props} />);
}

describe('Thumbnail component', () => {
  it('should render Image thumbnail component', () => {
    const wrapper = setup({
      fileType: 'image',
      url: 'http://somedomain.com/image/1',
    });

    expect(
      wrapper.find('.thumbnail-image').prop('style').backgroundImage,
    ).toEqual('url(http://somedomain.com/image/1)');
  });

  it('should render default thumbnail', () => {
    const wrapper = setup({
      fileType: 'doc',
      url: 'http://somedomain.com/document/1',
    });

    expect(wrapper.find('.thumbnail-default').text()).toBe('doc');
  });
});
