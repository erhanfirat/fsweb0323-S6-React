import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export let axiosInstance = axiosWithAuth();

export const updateToken = (token) => {
  localStorage.setItem("token", token);
  axiosInstance = axiosWithAuth();
  //axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
