import { ReactNode, useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';
import { User } from "./UserInterface";

interface CurrentUserLoaderProps {
    children?: React.ReactElement;
  }

export const CurrentUserLoader: React.FC<CurrentUserLoaderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            
            try {
                const response = await axios.get<User>('/current-user');
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching current user:", error);
                setUser(null); 
            }
        })();
    }, []);

    return (
        <>
            {React.Children.map(children, (child) => {
                /*
                    <{ user: User | null }>: Child element is expected to accept a user prop of type User | null
                */
                if (React.isValidElement<{ user: User | null }>(child)) {
                    return React.cloneElement(child, { user });
                }
            })}
        </>
    );
}