import React from "react";
import Product from "./Product";
import Variant from "./Variant";
import Calc from "./Calc";

export default function App1() {
  const a = 10;
  const b = 20;

  return (
    <div>
      <h1>This is App1 Component</h1>
      <Product name="Laptop" price={45000} />
      <Variant />
      <Calc v1={a} v2={b} />
    </div>
  );
}
