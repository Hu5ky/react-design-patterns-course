//Simple HOC component that receives a component and prints all of the props that it accepts
export const printProps = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
        console.log(props);
        return <Component {...props} />;
    };
};
