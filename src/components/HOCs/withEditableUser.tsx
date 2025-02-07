import React, { useState, useEffect} from "react";
import axios from "axios";
import { User } from "../../data/UserInterface"

export const withEditableUser = <P extends object>(
    Component: React.ComponentType<P>,
    userId: string,
) => {
    return (props: P) => {
        const [originalUser, setOriginalUser] = useState<User | null>(null);
        const [user, setUser] = useState<User | null>(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get<User>(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })(); // () After async func declaration is called IIFE (Immediately Invoked Function Expression)
        }, []);
        
        const onChangeUser = (changes: Partial<User>) => {
            /*
                Functional update of setUser, it uses the previous stae 
            */
            setUser(prevUser => (prevUser ? { ...prevUser, ...changes } : prevUser));
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setOriginalUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component 
            {...props} 
            user={user}
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />
    }
}