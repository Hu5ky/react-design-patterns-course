import { useState, useEffect } from "react";

export const useDataSource = (getResourceFunc: () => any) => {
    const [resource, setResource] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResource(result);
        })();
    }, [getResourceFunc]);

    return resource;
}