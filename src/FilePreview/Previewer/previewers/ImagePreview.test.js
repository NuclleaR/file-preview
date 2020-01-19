import React from 'react';
import { shallow } from 'enzyme';
import ImagePreview from './ImagePreview';

function setup(props) {
  return shallow(<ImagePreview url="http://images.com/image-1" />);
}

describe('ImagePreview component', () => {
  it('should render image previewer', () => {
    const wrapper = setup();

    expect(wrapper.props()).toMatchObject({
      zoomIn: { step: 10 },
      zoomOut: { step: 10 },
      wheel: { step: 1 },
    });
  });

  it('should call zoom handlers', () => {
    const wrapper = setup();
    const zoomIn = jest.fn();
    const zoomOut = jest.fn();
    const resetTransform = jest.fn();

    const innerComponent = wrapper.prop('children')({
      zoomIn,
      zoomOut,
      resetTransform,
    });

    shallow(innerComponent); //?
  });
});
