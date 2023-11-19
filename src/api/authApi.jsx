import axiosClient from "./axiosClient";

const authApi = {
  register(data) {
    const url = "/auth/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/auth/login";
    return axiosClient.post(url, data);
  },
  async getUser(params) {
    const newParams = { ...params };
    const accessToken = localStorage.getItem("token");
    const url = `/auth/me`;
    const response = await axiosClient.get(url, {
      params: { ...newParams },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  },
};

export default authApi;
