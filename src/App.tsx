import { GenericInput } from "./features/onboarding/GenericInput";
import { MockStep } from "./features/onboarding/MockStep";
import { UncontrolledOnboardingFlow } from "./features/onboarding/UncontrolledOnboardingFlow";

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
          <MockStep>
            <GenericInput 
                inputName="StepThreeInput"
                placeholder="Step Three Data"
                type="text"
            />
          </MockStep>
        </UncontrolledOnboardingFlow>
      </>
    )
  }

  export default App