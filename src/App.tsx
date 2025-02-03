import { GenericInput } from "./components/GenericForm";
import { MockStepComponent } from "./components/MockStepComponent";
import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

function App() {

  return (
      <>
        <h1>Your code goes here</h1>
        
        <UncontrolledOnboardingFlow>
          <MockStepComponent>
            <GenericInput 
              inputName="StepOneInput"
              placeholder="Step One Data"
              type="text"
            />
          </MockStepComponent>
          <MockStepComponent>
          </MockStepComponent>
        </UncontrolledOnboardingFlow>
      </>
    )
  }

  export default App