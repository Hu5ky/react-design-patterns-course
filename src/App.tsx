import { UserInfo } from "./components/UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import ProductInfo from "./components/ProductInfo";
import { User } from "./data/UserInterface";
import { DataSource } from "./data/DataSource";
import { DataSourceTwo } from "./DataSourceTwo";
import { Product } from "./data/ProductInterface";
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

  const getProductById: (urlToTarget: string) => Promise<Product> = async (urlToTarget: string) => {
    const response = await axios.get(urlToTarget);
    return(response.data);
  };

  const getProduct = () => getProductById('/products/101');

  const getUserById: (urlToTarget: string) => Promise<User> = async (urlToTarget: string) => {
    const response = await axios.get(urlToTarget);
    return(response.data);
  };

  const getUser = () => getUserById('/users/101');

  function App() {
    return (
      <>
        
        {/* TypeSafety enforced DataSource*/}
        <DataSource<Product> getDataFunc={getProduct} resourceName={"product"}>
          <ProductInfo />
        </DataSource>

        {/* Throws a TS error */}
        <DataSource<Product> getDataFunc={getUser} resourceName={"product"}>
          <ProductInfo />
        </DataSource>
      </>
    )
  }

  export default App