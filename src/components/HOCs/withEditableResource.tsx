import React, { useState, useEffect} from "react";
import axios from "axios";
import { User } from "../../data/UserInterface"

export const withEditableUser = <P extends object>(
    Component: React.ComponentType<P>,
    userId: string,
) => {
    return (props: P) => {
        const [originalData, setOriginalData] = useState<User | null>(null);
        const [data, setData] = useState<User | null>(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get<User>(`/users/${userId}`);
                setOriginalData(response.data);
                setData(response.data);
            })(); // () After async func declaration is called IIFE (Immediately Invoked Function Expression)
        }, []);
        
        const onChangeUser = (changes: Partial<User>) => {
            /*
                Functional update of setUser, it uses the previous stae 
            */
            setData(prevUser => (prevUser ? { ...prevUser, ...changes } : prevUser));
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user: data });
            setOriginalData(response.data);
            setData(response.data);
        }

        const onResetUser = () => {
            setData(originalData);
        }

        return <Component 
            {...props} 
            user={data}
            onChangeUser={onChangeUser}
            onSaveUser={onSaveUser}
            onResetUser={onResetUser}
        />
    }
}