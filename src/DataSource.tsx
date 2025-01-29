import React, { useEffect, useState } from 'react';

interface DataSourceProps<T> {
    children: React.ReactElement;
    getDataFunc: () => Promise<T>;
    resourceName: string;
}

export const DataSource = <T,>({
    getDataFunc = async () => ({} as T),
    resourceName,
    children,
}: DataSourceProps<T>) => {
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
                return React.cloneElement(child, { [resourceName]: state });
            })}
        </>
    );
};