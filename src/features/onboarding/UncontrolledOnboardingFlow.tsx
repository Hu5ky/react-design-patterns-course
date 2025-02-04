import React, { useState } from "react";

interface UncontrolledOnboardingFlowProps {
    onFinish: (data: any) => void;
    children?: React.ReactNode;
}

export const UncontrolledOnboardingFlow: React.FC<UncontrolledOnboardingFlowProps> = ({ onFinish, children}) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    
    const totalSteps: number = React.Children.toArray(children).length;
    
    //Go to next onboarding component and save current component data
    const goToNext = (stepData: any) => {
        const nextIndex: number = currentIndex + 1;
        const updatedData = {
            ...onboardingData,
            [`step_${currentIndex + 1}`]: stepData
        };

        if (nextIndex < React.Children.toArray(children).length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            onFinish?.(updatedData);
        }
        
        setOnboardingData(updatedData);
    }

    //Go to previous onboarding component
    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    //Re-render child elements with refs to next & previous steps and the current onboarding flow progress
    if (React.isValidElement<any>(currentChild)) {
        return React.cloneElement(currentChild, {
          stepNumber: currentIndex + 1,
          totalSteps,
          goToNext,
          goToPrevious
        });
      }
    
    return null;
}