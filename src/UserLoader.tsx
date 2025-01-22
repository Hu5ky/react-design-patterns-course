import { useEffect, useState } from "react"
import axios from 'axios';
import React from 'react';
import { User } from "./UserInterface";

interface UserLoaderProps {
    children?: React.ReactNode;
    userId: number;
  }

export const UserLoader: React.FC<UserLoaderProps> = ({ userId, children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            
            try {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user:", error);
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