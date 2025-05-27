import React from "react";
import { useState } from "react";

export default function App10() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 35 },
  ]);
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    !cart[id] && setCart({ ...cart, [id]: 1 });
  };

  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const decrement = (id) => {
    const newCount = cart[id] - 1;
    if (newCount <= 0) {
      const updatedCart = { ...cart };
      delete updatedCart[id];
      setCart(updatedCart);
    } else {
      setCart({ ...cart, [id]: newCount });
    }
  };

  const getTotal = () => {
    return products.reduce((acc, value) => {
      return acc + (cart[value.id] ? value.price * cart[value.id] : 0);
    }, 0);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>App 10</h1>
      <h2>Assignment</h2>

      <h3>Products</h3>
      <ol>
        {products.map((value) => (
          <li key={value.id}>
            {value.name} - ₹{value.price}{" "}
            <button onClick={() => addToCart(value.id)}>Add</button>
          </li>
        ))}
      </ol>

      <hr />

      <h3>My Cart 🛒</h3>
      <ol>
        {products.map(
          (value) =>
            cart[value.id] && (
              <li key={value.id}>
                {value.name} - ₹{value.price}{" "}
                <button onClick={() => decrement(value.id)}>-</button>{" "}
                {cart[value.id]}{" "}
                <button onClick={() => increment(value.id)}>+</button> = ₹
                {value.price * cart[value.id]}
              </li>
            )
        )}
      </ol>

      {Object.keys(cart).length > 0 && (
        <h4 style={{ color: "#2e8b57" }}>Total: ₹{getTotal()}</h4>
      )}
    </div>
  );
}
