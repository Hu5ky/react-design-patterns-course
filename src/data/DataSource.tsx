import React, { useEffect, useState } from 'react';

interface DataSourceProps<T> {
    children: React.ReactElement;
    getDataFunc: () => T | Promise<T>; // Accepts both async and sync functions
    resourceName: string;
}

export const DataSource = <T,>({
    getDataFunc,
    resourceName,
    children,
}: DataSourceProps<T>) => {
    const [state, setState] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await Promise.resolve(getDataFunc()); // Handles both sync & async cases
                setState(data);
            } catch (error) {
                console.error("Error fetching current resource:", error);
                setState(null);
            }
        })();
    }, [getDataFunc]);

    return (
        <>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, { [resourceName]: state })
            )}
        </>
    );
};
