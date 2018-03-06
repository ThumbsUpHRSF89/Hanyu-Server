import React from 'react';
import ImageView from '../client/components/imageView/imageView';
import ImageList from '../client/components/imageView/imageList';
import MainImage from '../client/components/imageView/mainImage';

describe('<ImageView />', () => {
  it('should render an <ImageList /> component', () => {
    const wrapper = shallow(<ImageView images={[]} />);
    expect(wrapper.find(ImageList).length).toEqual(1);
  });

  it('should render an <MainImage /> component', () => {
    const wrapper = shallow(<ImageView images={[]} />);
    expect(wrapper.find(MainImage).length).toEqual(1);
  });
});
