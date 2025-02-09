import React, { useState, useEffect} from "react";
import axios from "axios";

const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const withEditableResource = <P extends object>(
    Component: React.ComponentType<P>,
    resourceName: string,
    resourceURL: string,
) => {
    return (props: P) => {
        const [originalData, setOriginalData] = useState<any | null>(null);
        const [data, setData] = useState<any | null>(null);

        useEffect(() => {
            (async () => {
                console.log(resourceURL);
                const response = await axios.get<any>(resourceURL);
                setOriginalData(response.data);
                setData(response.data);
            })(); // () After async func declaration is called IIFE (Immediately Invoked Function Expression)
        }, []);
        
        const onChange = (changes: Partial<any>) => {
            /*
                Functional update of setUser, it uses the previous stae 
            */
            setData(prevData => (prevData ? { ...prevData, ...changes } : prevData));
        }

        const onSave = async () => {
            const response = await axios.post(resourceURL, { [resourceName]: data });
            setOriginalData(response.data);
            setData(response.data);
        }

        const onReset = () => {
            setData(originalData);
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,
        }

        return <Component 
            {...props} 
            {...resourceProps}
        />
    }
}