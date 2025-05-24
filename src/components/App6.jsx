import React from 'react';
import Fruit from './Fruit'; 

const App6 = () => {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '40px',
    border: '2px solid black',
    width: 'fit-content',
    margin: 'auto',
    marginTop: '50px'
  };

  return (
    <div style={containerStyle}>
      <Fruit name="Apple" />
      <Fruit name="Mango" />
      <Fruit name="Orange" />
      <Fruit name="Banana" />
    </div>
  );
};

export default App6;
