import { MockStepComponent } from "./components/MockStepComponent";
import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

function App() {

  return (
      <>
        <h1>Your code goes here</h1>
        
        <UncontrolledOnboardingFlow>
          <MockStepComponent />
          <MockStepComponent />
          <MockStepComponent />
        </UncontrolledOnboardingFlow>
      </>
    )
  }

  export default App