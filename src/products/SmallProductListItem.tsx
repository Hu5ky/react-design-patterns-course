import { Product } from './ProductInterface';

export const SmallProductListItem = ( {product} : {product : Product} ) => {
    const { name, price } = product;

    return (
        <h3>{name} - {price}</h3>
    );
}

export default SmallProductListItem