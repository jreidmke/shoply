import Product from './Product';
import {useSelector, useDispatch} from 'react-redux';
import { v4 } from 'uuid';
import DiscountForm from './DiscountForm';

const Cart = () => {
    const dP = useSelector(state => state.products.products.products); //gross

    const cart = useSelector(state => state.cart.cart);
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

    const emptyCart = <h1>YOUR CART IS EMPTY</h1>

        return(
            <div>
                <DiscountForm/>
                  {cart.length !== 0 ? cartRender : emptyCart}
            </div>
        )
}

export default Cart;
