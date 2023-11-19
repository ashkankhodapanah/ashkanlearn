import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000/v1/",
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.response.use(
  function (response) {
    console.log("Response received:", response);
    return response;
  },
  function (error) {
    console.error("Error in response:", error);
    return Promise.reject(error);
  }
);

export default axiosClient;
