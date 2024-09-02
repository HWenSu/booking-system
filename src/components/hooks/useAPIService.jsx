import React, { useEffect, useState } from "react";
import axios from "axios";

const useAPIService = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log("Fetched data:", response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data", error);
      }
    };
    getData();
  }, [url]);

  return { data, error };
};

export default useAPIService;
