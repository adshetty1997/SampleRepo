import React from 'react';
import BestSeller from './components/Bestsellers';
import Chat from './components/Chat';
import Profile from './assets/profile.jpg';
import Product1 from './assets/prod1.png';
import Product2 from './assets/prod2.png';
import Product3 from './assets/prod3.png';

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <br/>
      <BestSeller
        width={375}
        borderRadius={24}
        backgroundColor='#FFFFFF'
        selectedBackgroundColor='#FEF2EE'
        itemsBackgroundColor='#FFFFFF'
        fontFamily='Montserrat'
        productColor='#FE805C'
        subtitleColor='#AFAFBD'
        priceColor='#12121F'
        headerColor='#000000'
        list={[
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
        ]}
      />
      <br/>
      <br/>
      <br/>
      <Chat
        width={375}
        borderRadius={24}
        profile={Profile}
        name='Emily Dougrer'
        designation='Developer'
        bodyText='Hi there.👋 We use Boards to share initial goals and ideas.'
        backgroundColor='#4643D3'
        fontStyle='Montserrat'
        fontColor='#FFFFFF'
        onClose={() => {
          console.log('Close Clicked');
        }}
        onSend={() => {
          console.log('Send Clicked');
        }}
      />
      <br/>
    </div>
  );
}

export default App;
