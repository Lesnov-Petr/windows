import axios from "axios";
export const API_URL = "https://api.xn----7sbatzciohbqkcl4r.xn--p1ai/";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const localAccessToken = localStorage.getItem("accessToken");
  const sessionAccessToken = sessionStorage.getItem("accessToken");

  if (localAccessToken) {
    config.headers.Authorization = `Bearer ${localAccessToken}`;
  }

  if (sessionAccessToken) {
    config.headers.Authorization = `Bearer ${sessionAccessToken}`;
  }

  return config;
});

export default $api;
