import {NavLink} from 'react-router-dom';
import './NavBar.css';
import {useSelector, useDispatch} from 'react-redux';
import {sumTotal} from './helpers';

const NavBar = () => {
    const cart = useSelector(state => state.cart.cart);
    // const dispatch = useDispatch();
    // const total = dispatch({type: 'TOTAL', payload: sumTotal(cart)});

    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/cart">Cart</NavLink>
            <h2>Items in Cart: {cart.length}</h2>
            <h2>Total Cost: {sumTotal(cart)}</h2>
            {/* <h3>{total[total.length - 1]}</h3> */}
        </nav>
    )
}

export default NavBar;