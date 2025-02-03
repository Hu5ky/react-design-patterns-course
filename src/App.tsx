import { GenericInput } from "./components/GenericForm";
import { MockStepComponent } from "./components/MockStepComponent";
import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

function App() {

  return (
      <>
        <h1>Messing around with Onboarding Flows</h1>
        
        <UncontrolledOnboardingFlow>
          <MockStepComponent>
            <GenericInput 
              inputName="StepOneInput"
              placeholder="Step One Data"
              type="text"
            />
          </MockStepComponent>
          <MockStepComponent>
          <GenericInput 
              inputName="StepTwoInput"
              placeholder="Step Two Data"
              type="text"
            />
          </MockStepComponent>
        </UncontrolledOnboardingFlow>
      </>
    )
  }

  export default App