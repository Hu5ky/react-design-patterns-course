import { UserInfo } from "./components/UserInfo";
import { withUser } from "./components/HOCs/withUser";

function App() {
  
  const UserInfoWithData = withUser(UserInfo, '102');

  return (
		<>
      <h1>Your code goes here</h1>
      <UserInfoWithData />
    </>
	);
}

export default App;