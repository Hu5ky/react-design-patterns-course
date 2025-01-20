import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';
import { User } from "./UserInterface";

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response =  await axios.get('/current-user');
            setUser(response.data);
        })();
    }, []);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }
            })}
        </>
    )
}