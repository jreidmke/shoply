import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ProductList from './ProductList';
import ProductFilter from './ProductFilter';
import Cart from './Cart';
import data from './data.json';

function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route exact path="/cart">
        <Cart/>
      </Route>
      <Route path="/products/:id">
        <ProductFilter products={data.products}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
