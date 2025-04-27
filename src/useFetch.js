import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [employees, setEmployees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("useEffect is loaded");

    fetch(url)
      .then((response) => {
        console.log("response", response);
        if (!response.ok) {
          throw Error("Network response was not ok");
        }
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        setTimeout(() => {
          setEmployees(data);
          setIsLoading(false);
        }, 2000);
      })
      .catch((res) => {
        setError(res.message);
        setIsLoading(false);
      });
  }, [url]);
  return { employees, isLoading, error, setEmployees };
};


export default useFetch;