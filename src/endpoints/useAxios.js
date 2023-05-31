import { toast } from "react-toastify";
import { axiosInstance } from "./api";
import { useState } from "react";

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

const useAxios = (initialValue = null) => {
  // response data'nın tutulacağı state
  const [data, setData] = useState(initialValue);
  // istek başladıktan sonra cevap gelene kadar true olur
  const [loading, setLoading] = useState(false);
  // Response error datasının tutulacağı state
  const [error, setError] = useState();

  const doRequest = ({
    endpoint,
    reqType = REQ_TYPES.GET,
    payload,
    config,
  }) => {
    setLoading(true);
    return axiosInstance[reqType](endpoint, payload, config)
      .then((res) => {
        setData(res.data);
        setError(null);
        return res.data;
      })
      .catch((err) => {
        setError(err);
        setData(initialValue);
        toast.error(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, error];
};

export default useAxios;
