import { UserInfo } from "./UserInfo";
import { ResourceLoader } from "./ResourceLoader";
import ProductInfo from "./ProductInfo";

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/102" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/101" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  )
}

export default App