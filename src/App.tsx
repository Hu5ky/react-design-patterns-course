import { UncontrolledOnboardingFlow } from "./components/UncontrolledOnboardingFlow";

function App() {
  
  const StepOne = ({ goToNext, goToPrevious }: {goToNext?: () => void, goToPrevious?: () => void}) => (
    <>
      <h1>Step 1</h1>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </>
  );

  const StepTwo = ({ goToNext, goToPrevious }: {goToNext?: () => void, goToPrevious?: () => void}) => (
    <>
      <h1>Step 2</h1>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </>
  );

  const StepThree = ({ goToNext, goToPrevious }: {goToNext?: () => void, goToPrevious?: () => void}) => (
    <>
      <h1>Step 3</h1>
      <button onClick={goToPrevious}>Previous</button>
      <button onClick={goToNext}>Next</button>
    </>
  );

  return (
      <>
        <h1>Your code goes here</h1>
        <UncontrolledOnboardingFlow>
          <StepOne />
          <StepTwo />
          <StepThree />
        </UncontrolledOnboardingFlow>
      </>
    )
  }

  export default App