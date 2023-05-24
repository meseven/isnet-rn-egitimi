import { useEffect, useState } from "react";
import requestApi from "../constants/requestApi";

const useHttp = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    requestApi(endpoint)
      .then(({ data }) => setData(data))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    setData,
    loading,
    error,
  };
};

export default useHttp;
