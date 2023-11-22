import axiosClient from "./axiosClient";

const categoryApi = {
  getAllCategories(data) {
    const url = "/category";
    return axiosClient.get(url, { params: data });
  },

  createCategory(data) {
    const url = `/category/`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.post(url, data, { headers });
  },

  editCategory(data, id) {
    const url = `/category/${id}`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.put(url, data, { headers });
  },

  deleteMenu(id) {
    const url = `/category/${id}/`;
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.delete(url, { headers });
  },
};

export default categoryApi;
