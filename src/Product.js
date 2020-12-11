import './Product.css';

const Product = ({name, price, description, image_url, handleRemove, handleAdd, id, numInCart}) => {
    return(
        <div id='productContainer'>
            <img src={image_url} alt='Product Image' id='productImg'/>
            <h1>{name.toUpperCase()}</h1>
            <h3>Price: {price}</h3>
            <h4>{description}</h4>
            <button onClick={()=>handleRemove(id)}>Remove From Cart</button>
            <button onClick={()=>handleAdd(id)}>Add To Cart</button>
            <h6>Num In Cart:{numInCart}</h6>
        </div>
    )
}

export default Product;