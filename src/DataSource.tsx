import { useEffect, useState } from "react"
import React from 'react';

interface DataSourceProps<T> {
    children?: React.ReactNode;
    getDataFunc: () => Promise<T>; //Type of no-arg function that returns a generic Promise
    resourceName: string;
}

export const DataSource = <T,>({ getDataFunc = async () => ({} as T), resourceName, children }: DataSourceProps<T>) => {
    const [state, setState] = useState<T | null>(null);
    useEffect(() => {
        (async () => {
            
            try {
                const data = await getDataFunc();
                setState(data);
            } catch (error) {
                console.error("Error fetching current resource:", error);
                setState(null); 
            }
        })();
    }, [getDataFunc]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state });
                }
            })}
        </>
    );
}