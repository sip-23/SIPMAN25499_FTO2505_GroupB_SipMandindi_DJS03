import { useState, useEffect } from 'react';

const useFetchPodcasts = (apiUrl) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        
        const podcasts = await response.json();
        setData(podcasts);
        
      } catch (err) {
        setError(err.message);
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);
   return { data, isLoading, error };
};

export default useFetchPodcasts;