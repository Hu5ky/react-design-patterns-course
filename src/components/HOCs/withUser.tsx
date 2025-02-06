import React, { useState, useEffect } from "react";
import axios from 'axios';
import { User } from "../../data/UserInterface";

export const withUser = <P extends object>(
    Component: React.ComponentType<P>,
    userId: string 
) => {
    return (props: P) => {
        const [user, setUser] = useState<User | null>(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get<User>(`/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        return <Component {...props} user={user} />
    }
}