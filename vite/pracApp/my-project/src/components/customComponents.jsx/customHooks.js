import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the async function
        const fetchData = async () => {
            setLoading(true); // In case of refetching
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        // Call the async function
        fetchData();

        // Cleanup function to avoid setting state if component unmounts
        return () => {
            setData(null);
            setError(null);
        };

    }, [url]);

    return { data, loading, error };
};

export default useFetch;
