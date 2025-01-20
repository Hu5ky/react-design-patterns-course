import { Product } from './ProductInterface';

export const ProductInfo = ( {product} : {product : Product} ) => {
    const { name, price, description, rating } = product;

    return (
        <>
            <h3>{name}</h3>
            <p>{price}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <p>Average Rating: {rating}</p>
        </>
    );
}

export default ProductInfo