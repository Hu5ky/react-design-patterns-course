import React, { FormEvent, useState, useEffect } from "react";

export const ControlledForm = () => {
    const [nameInputError, setNameInputError] = useState<string>("");
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [hairColor, setHairColor] = useState<string>('');

    useEffect(() => {
        if (name.length < 2) {
            setNameInputError("Name must be two or more characters");
        } else {
            setNameInputError('');
        }
    }, [name])

    return( 
        <>
            <form>
                {nameInputError && <p>{nameInputError}</p>}
                <input 
                    name="name" 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    name="age" 
                    type="number" 
                    placeholder="Age" 
                    value={age}
                    onChange={e => setAge(Number(e.target.value))}
                />
                <input 
                    name="hairColor" 
                    type="text" 
                    placeholder="Hair Color" 
                    value={hairColor}
                    onChange={e => setHairColor(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </>
    );
}