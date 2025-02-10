import React from "react";

interface RecursiveComponentProps{
    data: any;
}

const isObject = (x: any) => {
    return typeof x === 'object' && x !== null;
}

export const RecursiveComponent: React.FC<RecursiveComponentProps> = ({ data }) => {
    
    if (!isObject(data)) {
        return (
            <li>{data}</li>
        );
    }
    
    const pairs = Object.entries(data);
    return (
        <>
        {pairs.map(([key, value]) => (
            <li>
                {key}
                <ul>
                    <RecursiveComponent data={value}/>
                </ul>
            </li>
        ))}
        </>
    );
}