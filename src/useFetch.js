import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw Error("Could not fetch data for that resource.");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log("Data after parsing:", data);
        setData(jsonData);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);
  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
