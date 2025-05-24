import React from 'react';

const Fruit = ({ name }) => {
  const style = {
    border: '2px solid black',
    padding: '30px',
    margin: '10px',
    fontWeight: 'bold',
    fontSize: '20px',
    textAlign: 'center',
    width: '150px'
  };

  return <div style={style}>{name}</div>;
};

export default Fruit;
