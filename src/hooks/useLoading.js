import { useState } from "react";

const useLoading = (defaultValue) => {
    const [isLoading, setIsLoading] = useState(defaultValue);

    const loading = () => {
        setIsLoading(!loading);
    };

    return { isLoading, loading };
};

export default useLoading;
