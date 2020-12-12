import {NavLink} from 'react-router-dom';
import './NavBar.css';
import {useSelector} from 'react-redux';

function NavBar() {
    const cart = useSelector(state => state.cart);

    return(
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/cart">Cart</NavLink>
            <h2>Items in Cart: {cart.length}</h2>
        </nav>
    )
}

export default NavBar;