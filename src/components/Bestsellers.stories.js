import * as React from 'react';
import BestSeller from '../components/Bestsellers';
import Product1 from '../assets/prod1.png';
import Product2 from '../assets/prod2.png';
import Product3 from '../assets/prod3.png';

export default {
  title: 'Components/BestSeller',
  component: BestSeller,
};

const Template = (args) => <BestSeller {...args} />;

export const BestSellerComponent = Template.bind({});
BestSellerComponent.args = {
  width: 375,
  borderRadius: 24,
  backgroundColor: '#FFFFFF',
  selectedBackgroundColor: '#FEF2EE',
  itemsBackgroundColor: '#FFFFFF',
  fontFamily: 'Montserrat',
  productColor: '#FE805C',
  subtitleColor: '#AFAFBD',
  priceColor: '#12121F',
  headerColor: '#000000',
  list: [
    {
      image: Product1,
      company: 'Nike',
      name: 'Nike Air Max 270',
      price: '$195.80',
    },
    {
      image: Product2,
      company: 'Nike',
      name: 'Nike Air Max 90',
      price: '$195.80',
    },
    {
      image: Product3,
      company: 'Nike',
      name: 'Nike Air Max Plus',
      price: '$195.80',
    },
  ],
};
