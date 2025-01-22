import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';

interface ResourceLoaderProps {
    children?: React.ReactNode;
    resourceUrl: string;
    resourceName: string;
  }

export const ResourceLoader: React.FC<ResourceLoaderProps> = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        (async () => {
            
            try {
                const response = await axios.get(resourceUrl);
                setState(response.data);
            } catch (error) {
                console.error("Error fetching current resource:", error);
                setState(null); 
            }
        })();
    }, [resourceUrl]);

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