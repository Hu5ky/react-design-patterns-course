import { ControlledModal } from "./components/ControlledModal"
import { useState } from "react";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState<boolean>(false);
  
  return (
      <>
        <h1>Your code goes here</h1>
        <ControlledModal 
          shouldShow={shouldShowModal}
          onRequestClose={() => setShouldShowModal(false)}
        />
        <button onClick={() => setShouldShowModal(!shouldShowModal)}>
          {shouldShowModal ? 'Hide Modal' : 'Show Modal'} 
        </button>
      </>
    )
  }

  export default App