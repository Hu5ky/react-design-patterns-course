import { UserInfo } from "./components/UserInfo";
import { withUser } from "./components/HOCs/withUser";
import { UserInfoForm } from "./components/UserInfoForm";

function App() {
  
  return (
		<>
      <h1>Your code goes here</h1>
      {/* <UserInfoForm /> */}
      <UserInfo userId="102"/>
    </>
	);
}

export default App;