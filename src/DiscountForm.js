import {useState} from 'react';
import {total} from './helpers';
import {useSelector} from 'react-redux';

const DiscountForm = () => {
    const cart = useSelector(state => state.cart.cart);

    const [formData, setFormData] = useState(0);

    const handleChange = e => {
        const { value } = e.target;
        setFormData(formData => ({
            ...formData,
            value
        }));
    };

    const submit = e => {
        e.preventDefault();
        total(cart, formData.value);
        localStorage.setItem('isDiscounted', true);
    };

    return(
        <div>
            <form onSubmit={submit}>

                <input
                onChange={handleChange}
                type="radio"
                name="10"
                checked={formData.value === "10"}
                value={10}
                id="10"
                />
                <label htmlFor="10">10% Discount</label>

                <input
                onChange={handleChange}
                type="radio"
                name="20"
                checked={formData.value === "20"}
                value={20}
                id="20"
                />
                <label htmlFor="20">20% Discount</label>

                <input
                onChange={handleChange}
                type="radio"
                name="30"
                checked={formData.value === "30"}
                value={30}
                id="30"
                />
                <label htmlFor="30">30% Discount</label>

                <button>Add Discount</button>

            </form>

        </div>
    )
}

export default DiscountForm;