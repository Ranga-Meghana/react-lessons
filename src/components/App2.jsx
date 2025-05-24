import "./App2.css";
import Product from "./Product";

export default function App2() {
  const products = [
    { id: 1, name: "Product 1", price: 23 },
    { id: 2, name: "Product 2", price: 30 },
    { id: 3, name: "Product 3", price: 45 },
  ];
  
  return (
    <div>
      <h2 style={{color:'#d86c7a'}}>This is App2 component</h2>
      <div className="App-Product-Container">
        {products.map((value) => (
          <Product key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
}