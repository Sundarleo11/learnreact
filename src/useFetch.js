import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) {
      setIsLoading(false);
      setError("No URL provided");
      return; // Ensure no cleanup function is returned when URL is not provided
    }

    const abortCont = new AbortController();
    const signal = abortCont.signal;
    fetch(url, { signal: signal })
      .then((response) => {
        if (!response.ok) {
          throw Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setEmployees(data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((res) => {
        if (res.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(res.message);
          setIsLoading(false);
        }
      });

    return () => {
      abortCont.abort(); // Cleanup function to abort the fetch request if the component unmounts
    };
  }, [url]); // Removed isLoading from dependencies to avoid unnecessary re-renders
  return { employees, isLoading, error, setEmployees };
};

export default useFetch;
