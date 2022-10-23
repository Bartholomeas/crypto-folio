import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('null');

  const sendRequest = async (url: string) => {
    setIsLoading(true);
    setError('null');
    try {
      const response = await axios(url!);
      setData(response);
      response;
    } catch (err) {
      setError('Something went wrong!');
      throw new Error('Something went wrong!');
    }
  };

  return { data };
};

export default useFetch;
