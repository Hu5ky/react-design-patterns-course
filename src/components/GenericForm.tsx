import React, { useState } from "react"

interface GenericInputProps {
    inputName: string;
    type: string;
    placeholder?: string;
    sendData?: (data: React.ReactNode) => void;
}

export const GenericInput: React.FC<GenericInputProps> = ({
    inputName,
    type,
    placeholder = "",
    sendData,
}) => {
    const [inputData, setInputData]= useState<string>("");

    const returnInputData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent form submission
        if (sendData) {
            sendData(inputData);
        }
    };

    return(
        <>
        <form>
            <input 
                name={inputName}
                type={type}
                placeholder={placeholder}
                value={inputData}
                onChange={e => setInputData(e.target.value)}
            />
            <button onClick={returnInputData}>Submit</button>
        </form>
        </>
    );
}