import React, { useState, useEffect } from "react"

interface MockStepComponentProps {
    stepNumber?: number;
    totalSteps?: number;
    goToNext?: () => void;
    goToPrevious?: () => void;
    children?: React.ReactNode;
}

export const MockStepComponent: React.FC<MockStepComponentProps> = ({ 
    stepNumber: currentStep = 1,
    totalSteps = 1, 
    goToNext, 
    goToPrevious,
    children
}) => {
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState<boolean>(false);
    const [stepData, setStepData] = useState<any>(null);

    const getChildData = ({ data } : {data: React.ReactNode}) => {
        setStepData(data);
        console.log("Parent receiving: ", data); 
    }

    useEffect(() => {
        const updateButtonStates = () => {
            setIsPreviousDisabled(currentStep === 1);
            setIsNextDisabled(currentStep === totalSteps);
        };
        updateButtonStates();
    }, [currentStep, totalSteps]);

    /*
        Would probably be better to set the buttons and button logic in UncontrolledOnboardingFlow component
    */
    return (
        <>
            <h1>Step {currentStep}</h1>
            
            {children}
            <p>Data:{stepData}</p>
            <button 
                onClick={goToPrevious} 
                disabled={isPreviousDisabled}
            >Previous</button>
            <button 
                onClick={goToNext} 
                disabled={isNextDisabled}
            >Next</button>
        </>
    );
}