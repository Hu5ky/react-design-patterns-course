import React, { useState } from "react"

interface UncontrolledOnboardingFlowProps {
    onFinish?: any;
    children?: React.ReactNode;
}

export const UncontrolledOnboardingFlow: React.FC<UncontrolledOnboardingFlowProps> = ({ onFinish, children}) => {
    const [onboardingData, setOnboardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNext = () => {
        if (currentIndex + 1 < React.Children.toArray(children).length) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext, goToPrevious });
    }
    
    return null;
}