import { Product } from './ProductInterface';

interface ProductInfoProps {
    product?: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({product}) => {

    return product ? (
        <>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <h3>Description</h3>
            <p>{product.description}</p>
            <p>Average Rating: {product.rating}</p>
        </>
    ) : <p>Loading...</p>;
}

export default ProductInfo