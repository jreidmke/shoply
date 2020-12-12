import {NavLink} from 'react-router-dom';
import './NavBar.css';
import {useSelector} from 'react-redux';
import {total} from './helpers';

const NavBar = () => {
    const cart = useSelector(state => state.cart.cart);

    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/cart">Cart</NavLink>
            <h2>Items in Cart: {cart.length}</h2>
            <h2>Total Cost: {total(cart)}</h2>
        </nav>
    )
}

export default NavBar;