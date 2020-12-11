import logo from './logo.svg';
import './App.css';
import Product from './Product';
import data from './data.json';
import {useState} from 'react';
import { uuid } from 'uuidv4';

function App() {
  const [cart, setCart] = useState([]);

  const addProduct = (newItem) => {
    setCart([...cart, newItem])
  }

  const removeProduct = (id) => {
    let tempCart = cart;
    tempCart.splice(cart.indexOf(id), 1);
    setCart(tempCart);
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
    numInCart={(cart.filter(k => k === key)).length}
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
