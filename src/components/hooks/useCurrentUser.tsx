import { useState, useEffect } from "react";
import axios from "axios";
import { User } from "../../data/UserInterface";

export const useCurrentUser = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get<User>('/current-user');
            setUser(response.data);
        })();
    }, []);

    return user;
}