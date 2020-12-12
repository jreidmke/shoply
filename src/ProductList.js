import Product from './Product';
import data from './data.json';
import {useSelector, useDispatch} from 'react-redux';
import { v4 } from 'uuid';
import {add_to_cart, remove_from_cart} from './actions';

const ProductList = () => {
      // const [cart, setCart] = useState([]);

      // const addProduct = (newItem) => {
      //   setCart([...cart, newItem])
      // }

      // const removeProduct = (id) => {
      //   cart.splice(cart.indexOf(id), 1);
      //   setCart([...cart]);
      // };

      const dP = data.products;
      const productKeys = Object.keys(dP);

      const cart = useSelector(state => state.cart.cart);
      console.log(cart);
      const dispatch = useDispatch();

      // const addProduct = (newItem) => dispatch({ type: 'ADD_TO_CART', payload: newItem});
      // const removeProduct = (id) => dispatch({type: 'REMOVE_FROM_CART', id})

      const addProduct = (newItem) => dispatch(add_to_cart(newItem));
      const removeProduct = (id) => dispatch(remove_from_cart(id));


      const productRender = productKeys.map(key =>
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
                  {productRender}
            </div>
        )
}

export default ProductList