import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../../data/UserInterface";

export const useUser = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get<User>(`/users/${userId}`);
            setUser(response.data);
        })();
    }, [userId]);

    return user;
}