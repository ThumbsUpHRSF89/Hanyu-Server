import React from 'react';
import App from '../client/index';
import ImageView from '../client/component/imageView';

describe('App', () => {
  it('should render an <ImageView /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ImageView).length).toEqual(1);
  });
});
