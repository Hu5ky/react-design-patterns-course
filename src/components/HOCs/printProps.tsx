import React from "react";

export const printProps = <P extends object>(WrappedComponent: React.ComponentType<P> ) => {
    return function PrintPropsWrapper(props: P) { 
        console.log(props);
        return <WrappedComponent {...props} />
    };
};
