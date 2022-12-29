import React, { useState, useEffect } from 'react'

export default function useJSONFetch(url, opts) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                let response = await fetch(url, opts);
                let result = await response.json();
                setData(result.status);
            } catch(error) {
                setError(error);
            }   finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url, opts]);

    return {data, loading, error};
}