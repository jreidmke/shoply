import logo from './logo.svg';
import './App.css';
import Product from './Product';
import data from './data.json';
import {useState} from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const addProduct = (newItem) => {
    setCart([...cart, newItem])
  }

  const removeProduct = (id) => {
    setCart(cart.filter(p => p.id !== id))
  };

  const dP = data.products;
  const productKeys = Object.keys(dP);
  const productRender = productKeys.map(key =>
    <Product
    key={key}
    name={dP[key].name}
    price={dP[key].price}
    description={dP[key].description}
    image_url={dP[key].image_url}
    id={key}
    handleAdd={addProduct}
    handleRemove={removeProduct}
    />)

  return (
    <div className="App">
      <h1>Items in Cart: {cart.length}</h1>
      {console.log(cart)}
      {productRender}
    </div>
  );
}

export default App;
