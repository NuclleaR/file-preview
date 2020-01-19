import React from 'react';
import { shallow, mount } from 'enzyme';
import ThumbGallery from './ThumbGallery';
import { attachments } from '../../__fixtures__/files';

function setup(props, fn = shallow) {
  const defaultProps = {
    files: attachments,
  };
  return fn(<ThumbGallery {...defaultProps} {...props} />);
}

let wrapper;

function hasActive(index) {
  return wrapper
    .find('Thumbnail .thumbnail')
    .at(index)
    .hasClass('active');
}

describe('ThumbGallery component', () => {
  afterEach(() => {
    wrapper = undefined;
  });

  it('should render component', () => {
    wrapper = setup();

    expect(wrapper.find('Thumbnail').length).toBe(2);
  });

  it('should set active file', () => {
    wrapper = setup(
      {
        active: 1,
      },
      mount,
    );

    expect(hasActive(1)).toBeTruthy();

    wrapper.setProps({ active: 0 });
    wrapper.update();

    expect(hasActive(1)).toBeFalsy();
    expect(hasActive(0)).toBeTruthy();
  });

  it('should call next slide handler', () => {
    const onNext = jest.fn();
    wrapper = setup({
      active: 0,
      onNext,
    });
    wrapper.find('button.next').simulate('click');

    expect(onNext).toHaveBeenCalled();
  });

  it('should set prev slide', () => {
    const onPrev = jest.fn();
    wrapper = setup({
      active: 0,
      onPrev,
    });
    wrapper.find('button.prev').simulate('click');

    expect(onPrev).toHaveBeenCalled();
  });
});
