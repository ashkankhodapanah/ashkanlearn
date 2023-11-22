import axiosClient from "./axiosClient";

const menusApi = {
  getAllMenus(data) {
    const url = "/menus";
    return axiosClient.get(url, { params: data });
  },
  getAllPanelMenus(data) {
    const url = "/menus/all";
    return axiosClient.get(url, { params: data });
  },
  getAllTopbarLinks(data) {
    const url = "/menus/topbar";
    return axiosClient.get(url, { params: data });
  },
  createMenu(data) {
    const url = `/menus/`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.post(url, data, { headers });
  },
  deleteMenu(id) {
    const url = `/menus/${id}/`;
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.delete(url, { headers });
  },
};

export default menusApi;
