import React from 'react';
import ImageView from '../client/components/imageView';
import ImageList from '../client/components/imageList';
import MainImage from '../client/components/mainImage';

describe('<ImageView />', () => {
  it('should render an <ImageList /> component', () => {
    const wrapper = shallow(<ImageView image={[]} />);
    expect(wrapper.find(ImageList).length).toEqual(1);
  });

  it('should render an <MainImage /> component', () => {
    const wrapper = shallow(<ImageView image={[]} />);
    expect(wrapper.find(MainImage).length).toEqual(1);
  });
});
