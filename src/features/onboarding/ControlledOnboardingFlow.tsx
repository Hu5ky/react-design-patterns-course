import React from "react";

interface ControlledOnboardingFlowProps {
    currentIndex: number;
    onNext: any;
    onPrevious: any;
    onFinish?: (data: any) => void;
    children?: React.ReactNode;
}

export const ControlledOnboardingFlow: React.FC<ControlledOnboardingFlowProps> = ({ 
    currentIndex,
    onNext,
    onPrevious,
    onFinish, 
    children
}) => {
   
    
    const totalSteps: number = React.Children.toArray(children).length;
    
    //Go to next onboarding component and save current component data
    const goToNext = (stepData: any) => {
      onNext(stepData);
    }
    
    const goToPrevious = () => {
        onPrevious();
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