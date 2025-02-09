import { useState, useEffect } from "react";
import axios from "axios";

export const useResource = (resourceUrl: string) => {
    const [resource, setResource] = useState<any | null>(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get<any>(resourceUrl);
            setResource(response.data);
        })();
    }, [resourceUrl]);

    return resource;
}