import React, { useState } from "react"

interface GenericInputProps {
    inputName: string;
    type: string;
    placeholder?: string;
    returnDataToParentFunc?: (data: any) => void;
}

/*
    A wrapper component for a standard HTML input. Allows to dynamically create an input and return data via func call
*/
export const GenericInput: React.FC<GenericInputProps> = ({
    inputName,
    type,
    placeholder = "",
    returnDataToParentFunc,
}) => {
    const [inputData, setInputData]= useState<string>("");

    const submitData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent form submission
        if (returnDataToParentFunc) {
            returnDataToParentFunc(inputData);
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
            <button onClick={submitData}>Submit</button>
        </form>
        </>
    );
}