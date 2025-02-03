import React, { useState, useEffect } from "react"

interface MockStepComponentProps {
    stepNumber?: number; // Current step of onboarding process
    totalSteps?: number; // Total number of steps in the onboarding process
    goToNext?: (data: any) => any; // Func ref
    goToPrevious?: () => void;
    children?: React.ReactNode;
}

/*
    MockStep: Container component to render children components and to aggregate the data 
*/
export const MockStep: React.FC<MockStepComponentProps> = ({ 
    stepNumber: currentStep = 1,
    totalSteps = 1, 
    goToNext, 
    goToPrevious,
    children
}) => {
    const [stepData, setStepData] = useState<{}>(); //Default stepData is null

    return (
        <>
            <h1>Step {currentStep}</h1>
            
            {React.Children.map(children, (child) => 
                React.isValidElement(child) 
                    ? React.cloneElement(child, { sendData: setStepData }) 
                    : child
            )}

            <p>Step Data: {JSON.stringify(stepData)}</p>

            <button 
                onClick={goToPrevious} 
                disabled={currentStep === 1}
            >Previous</button>
            
            <button 
                onClick={() => goToNext?.(stepData)}
                // disabled={currentStep === totalSteps}
            >Next</button>
        </>
    );
}