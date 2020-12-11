import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import data from './data.json';

function ProductFilter() {
    const {id} = useParams();
    if(id) {
        let p = data.products[id];
        return <Product name={p.name} price={p.price} description={p.description} id={p.id} image_url={p.image_url}/>
    }
  return null;
}

export default ProductFilter;