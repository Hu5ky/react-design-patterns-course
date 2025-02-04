import { ControlledOnboardingFlow } from "./features/onboarding/ControlledOnboardingFlow";
import { GenericInput } from "./features/onboarding/GenericInput";
import { MockStep } from "./features/onboarding/MockStep";
import { useState } from "react";

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const onNext = (stepData: any) => {
      setOnboardingData({...onboardingData, ...stepData});
      setCurrentIndex(currentIndex + 1);
    }

    const onPrevious = () => {
      setCurrentIndex(currentIndex - 1);
    }

  return (
      <>
        <h1>Messing around with Onboarding Flows</h1>
        <ControlledOnboardingFlow 
          currentIndex={currentIndex}
          onNext={onNext}
          onPrevious={onPrevious}
        >
          <MockStep>
            <GenericInput 
              inputName="StepOneInput"
              placeholder="Step One Data"
              type="text"
            />
          </MockStep>
        </ControlledOnboardingFlow>
      </>
    )
  }

  export default App