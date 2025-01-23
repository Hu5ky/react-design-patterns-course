import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import ProductInfo from "./ProductInfo";
import { User } from "./UserInterface";
import { DataSource } from "./DataSource";
import { Product } from "./ProductInterface";
import axios from "axios";

  const fetchProductMock: () => Promise<Product> = async () => {
      return {
        id: 1,
        name: "Sample Product",
        price: "$9.99",
        description: "This is a sample product description.",
        rating: 4.5,
      }; 
  };

  const getProductId: () => Promise<Product> = async () => {
    const response = await axios.get(`/products/100}`);
    return(response.data);
  };

  function App() {
    return (
      <>
        {/* <ResourceLoader resourceUrl="/users/102" resourceName="user">
          <UserInfo />
        </ResourceLoader>
        <ResourceLoader resourceUrl="/products/101" resourceName="product">
          <ProductInfo />
        </ResourceLoader> */}
        <DataSource getDataFunc={fetchProductMock} resourceName={"product"}>
          <ProductInfo />
        </DataSource>
        <DataSource getDataFunc={getProductId} resourceName={"product"}>
          <ProductInfo />
        </DataSource>
      </>
    )
  }

  export default App