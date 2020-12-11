import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';
import data from './data.json';
import {useState} from 'react';

function App() {

  return (
    <div className="App">
      <ProductList/>
    </div>
  );
}

export default App;
