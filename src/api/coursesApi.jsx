import axiosClient from "./axiosClient";

const coursesApi = {
  getAllCourses(data) {
    const url = "/courses";
    return axiosClient.get(url, { params: data });
  },

  createCourse(data) {
    const url = `/courses/`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.post(url, data, { headers });
  },

  getCategoryCourses(data, categoryName) {
    const url = `/courses/category/${categoryName}`;
    return axiosClient.get(url, { params: data });
  },

  deleteCourse(id) {
    const url = `/courses/${id}/`;
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.delete(url, { headers });
  },

  createSession(data, id) {
    const url = `/courses/${id}/sessions`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.post(url, data, { headers });
  },

  getAllSessions(data) {
    const url = "/courses/sessions";
    return axiosClient.get(url, { params: data });
  },

  removeSession(id) {
    const url = `/courses/sessions/${id}/`;
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.delete(url, { headers });
  },

  getRelatedCourses(data) {
    const url = "/courses/related/canvas";
    return axiosClient.get(url, { params: data });
  },

  getSssionInfo(id) {
    const url = `/courses/npm/${id}`;
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.get(url, { headers });
  },

  getPresells(data) {
    const url = "/courses/presell";
    return axiosClient.get(url, { params: data });
  },

  getPopular(data) {
    const url = "/courses/popular";
    return axiosClient.get(url, { params: data });
  },

  getSingleCourseData(data) {
    const url = "/courses/canvas";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.get(url, { headers });
  },

  registerToCourse(id, data) {
    const url = `/courses/${id}/register`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return axiosClient.post(url, data, { headers });
  },
};

export default coursesApi;
