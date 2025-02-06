import { printProps } from "./printProps";
import { UserInfo } from "./components/UserInfo";

function App() {
  
  const UserInfoWrapped = printProps(UserInfo);
  
  return (
		<>
      <h1>Your code goes here</h1>
      <UserInfoWrapped a={1} b="Hello" c={{name: 'Shaun'}}/>
    </>
	);
}

export default App;