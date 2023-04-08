import React from 'react';
import BestSeller from './components/Bestsellers';
import Chat from './components/Chat';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: '2rem',
      }}
    >
      <BestSeller/>
      <Chat/>
    </div>
  );
}

export default App;
