import React from 'react';
import { shallow, mount } from 'enzyme';
import ThumbGallery from './FileGallery';
import { photos } from '../../__fixtures__/photos';

function setup(props, fn = shallow) {
  const defaultProps = {
    files: photos,
  };
  return fn(<ThumbGallery {...defaultProps} {...props} />);
}

let wrapper;

function getActive(index) {
  return wrapper
    .find('Thumbnail')
    .at(index)
    .prop('active');
}

describe('ThumbGallery component', () => {
  afterEach(() => {
    wrapper = undefined;
  });

  it('should render component', () => {
    wrapper = setup();

    expect(wrapper.find('Thumbnail').length).toBe(10);
  });

  it('should set active file', () => {
    wrapper = setup(
      {
        activeFile: 2,
      },
      mount,
    );

    expect(getActive(2)).toBeTruthy();

    wrapper.setProps({ activeFile: 5 });
    wrapper.update();

    expect(getActive(2)).toBeFalsy();
    expect(getActive(5)).toBeTruthy();
  });

  it('should set next slide', () => {
    wrapper = setup({
      activeFile: 8,
    });
    expect(getActive(8)).toBeTruthy();

    wrapper.find('button.next').simulate('click');

    expect(getActive(8)).toBeFalsy();
    expect(getActive(9)).toBeTruthy();

    wrapper.find('button.next').simulate('click');
    wrapper.debug(); //?
    expect(getActive(0)).toBeTruthy();
  });

  it('should set prev slide', () => {
    wrapper = setup({
      activeFile: 1,
    });
    expect(getActive(1)).toBeTruthy();

    wrapper.find('button.prev').simulate('click');

    expect(getActive(1)).toBeFalsy();
    expect(getActive(0)).toBeTruthy();

    wrapper.find('button.prev').simulate('click');
    expect(getActive(1)).toBeFalsy();
    expect(getActive(9)).toBeTruthy();
  });
});
