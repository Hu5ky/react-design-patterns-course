import './cardStyle.css';  // Import the CSS file
import { useResource } from './hooks/useResource';

interface ProductInfoProps {
    productId: string;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ productId }) => {
    
    const product = useResource(`/products/${productId}`);
    
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