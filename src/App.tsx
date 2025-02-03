import { GenericInput } from "./components/GenericInput";
import { MockStep } from "./components/MockStepComponent";
import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

function App() {

  return (
      <>
        <h1>Messing around with Onboarding Flows</h1>
        
        <UncontrolledOnboardingFlow onFinish={(data: any) => {
          console.log('Onboarding Complete:', data);
        }}>
          <MockStep>
            <GenericInput 
              inputName="StepOneInput"
              placeholder="Step One Data"
              type="text"
            />
          </MockStep>
          <MockStep>
          <GenericInput 
              inputName="StepTwoInput"
              placeholder="Step Two Data"
              type="text"
            />
          </MockStep>
        </UncontrolledOnboardingFlow>
      </>
    )
  }

  export default App