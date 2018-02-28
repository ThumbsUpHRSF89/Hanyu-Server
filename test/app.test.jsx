import React from 'react';
import App from '../client/components/app';
import ImageView from '../client/components/imageView';

describe('App', () => {
  it('should render an <ImageView /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ImageView).length).toEqual(1);
  });
});
