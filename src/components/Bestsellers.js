import * as React from 'react';
import Product1 from '../assets/prod1.png';
import Product2 from '../assets/prod2.png';
import Product3 from '../assets/prod3.png';

const BestSeller = ({
  width = 375,
  borderRadius = 24,
  backgroundColor = '#FFFFFF',
  selectedBackgroundColor = '#FEF2EE',
  itemsBackgroundColor = '#FFFFFF',
  fontFamily = 'Montserrat',
  productColor = '#FE805C',
  subtitleColor = '#AFAFBD',
  priceColor = '#12121F',
  headerColor = '#000000',
  list = [
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
}) => {
  let height = (498 / 375) * width;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'start',
        backgroundColor: backgroundColor,
        color: headerColor,
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: `${borderRadius}px`,
        overflow: 'auto',
      }}
    >
      <div
        style={{
          fontSize: `${0.048 * height}px`,
          lineHeight: `${0.063 * height}px`,
          fontFamily: fontFamily,
          fontWeight: '600',
          letterSpacing: `0.25px`,
          textAlign: 'start',
          marginTop: `${0.064 * height}px`,
          marginBottom: `${0.048 * height}px`,
          marginLeft: `${0.085 * width}px`,
        }}
      >
        Bestsellers
      </div>
      {list.map((product, i) => {
        return (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'start',
              backgroundColor: i === 0 ? selectedBackgroundColor : itemsBackgroundColor,
              height: `${0.241 * height}px`,
              width: `${0.83 * width}px`,
              borderRadius: `${borderRadius}px`,
              marginLeft: `${0.085 * width}px`,
              marginBottom: `${0.04 * width}px`,
            }}
          >
            <img
              src={product.image}
              alt="logo"
              style={{
                width: `${0.25 * width}px`,
                height: `${0.189 * height}px`,
                marginLeft: `${0.048 * width}px`,
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginLeft: `${0.064 * width}px`,
                marginTop: `${0.032 * height}px`,
              }}
            >
              <div
                style={{
                  fontSize: `${0.03 * height}px`,
                  lineHeight: `${0.04 * height}px`,
                  fontFamily: fontFamily,
                  color: productColor,
                  fontWeight: '600',
                  letterSpacing: `0.25px`,
                  textAlign: 'start',
                  marginBottom: `${(i === 0 ? 0.022 : 0) * height}px`,
                }}
              >
                {product.name}
              </div>
              <div
                style={{
                  fontSize: `${0.025 * height}px`,
                  lineHeight: `${0.032 * height}px`,
                  fontFamily: fontFamily,
                  color: subtitleColor,
                  fontWeight: '400',
                  letterSpacing: `0.25px`,
                  textAlign: 'start',
                  marginBottom: `${0.018 * height}px`,
                }}
              >
                {product.company}
              </div>
              <div
                style={{
                  fontSize: `${0.03 * height}px`,
                  lineHeight: `${0.05 * height}px`,
                  color: priceColor,
                  fontFamily: fontFamily,
                  fontWeight: '600',
                  letterSpacing: `0.25px`,
                  textAlign: 'start',
                }}
              >
                {product.price}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

BestSeller.defaultProps = {
  width: Number,
  borderRadius: Number,
  backgroundColor: String,
  selectedBackgroundColor: String,
  itemsBackgroundColor: String,
  fontFamily: String,
  productColor: String,
  subtitleColor: String,
  priceColor: String,
  headerColor: String,
  list: [Object],
};

export default BestSeller;
