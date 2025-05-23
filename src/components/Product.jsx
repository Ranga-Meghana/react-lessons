import React from "react";

export default function Product({ value }) {
  return (
    <div className="App-Product-Box">
      <h2>{value.name}</h2>
      <h3>₹{value.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
}
