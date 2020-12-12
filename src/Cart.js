import Product from './Product';
import data from './data.json';
import {useSelector, useDispatch} from 'react-redux';
import { v4 } from 'uuid';

const Cart = () => {
    const dP = data.products;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const addProduct = (newItem) => dispatch({ type: 'ADD_TO_CART', payload: newItem});
    const removeProduct = (id) => dispatch({type: 'REMOVE_FROM_CART', id});

    const cartRender = cart.map(key =>
        <Product
        key={v4()}
        name={dP[key].name}
        price={dP[key].price}
        description={dP[key].description}
        image_url={dP[key].image_url}
        id={key}
        handleAdd={addProduct}
        handleRemove={removeProduct}
        numInCart={(cart.filter(k => k === key)).length}
        />)

        return(
            <div>
                {console.log(cart)}
                  <h1>Items in Cart: {cart.length}</h1>
                  {cartRender}
            </div>
        )
}

export default Cart;
