import { Product } from './ProductInterface';
import './cardStyle.css';  // Import the CSS file

interface ProductInfoProps {
    product?: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {

    return product ? (
        <div className="info-card">
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Average Rating: {product.rating}</p>
        </div>
    ) : <p>Loading...</p>;
}

export default ProductInfo;