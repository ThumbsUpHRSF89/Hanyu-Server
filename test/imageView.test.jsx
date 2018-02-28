import React from 'react';
import ImageView from '../client/component/imageView';
import ImageList from '../client/component/imageList';
import MainImage from '../client/component/mainImage';

describe('<ImageView />', () => {
  it('should render an <ImageList /> component', () => {
    const wrapper = shallow(<ImageView />);
    expect(wrapper.find(ImageList).length).toEqual(1);
  });

  it('should render an <MainImage /> component', () => {
    const wrapper = shallow(<ImageView />);
    expect(wrapper.find(MainImage).length).toEqual(1);
  });
});
