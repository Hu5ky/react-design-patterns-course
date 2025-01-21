import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <>
      <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>
    </>
  )
}

export default App