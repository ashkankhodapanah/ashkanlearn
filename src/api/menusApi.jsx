import axiosClient from "./axiosClient";

const getMenus = async () => {
  try {
    const response = await axiosClient.get("/menus");
    console.log("Response for getMenus:", response);
    return response.data;
  } catch (error) {
    console.error("Error getting menus:", error);
    throw error;
  }
};

const getAllMenus = async () => {
  try {
    const response = await axiosClient.get("/menus/all");
    console.log("Response for getAllMenus:", response);
    return response.data;
  } catch (error) {
    console.error("Error getting all menus:", error);
    throw error;
  }
};

const createMenu = async (menuData, token) => {
  try {
    const response = await axiosClient.post("/menus", menuData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response for createMenu:", response);
    return response.data;
  } catch (error) {
    console.error("Error creating menu:", error);
    throw error;
  }
};

const deleteMenu = async (menuId, token) => {
  try {
    const response = await axiosClient.delete(`/menus/${menuId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response for deleteMenu:", response);
    return response.data;
  } catch (error) {
    console.error("Error deleting menu:", error);
    throw error;
  }
};

export { getMenus, getAllMenus, createMenu, deleteMenu };



// const baseURL = "http://localhost:4000/v1/";

// const getMenus = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/menus`);
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting menus:", error);
//     throw error;
//   }
// };

// const getAllMenus = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/menus/all`);
//     return response.data;
//   } catch (error) {
//     console.error("Error getting all menus:", error);
//     throw error;
//   }
// };

// const createMenu = async (menuData, token) => {
//   try {
//     const response = await axios.post(`${baseURL}/menus`, menuData, {
//       headers: {
//         "content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error("Error creating menu:", error);
//     throw error;
//   }
// };

// const deleteMenu = async (menuId, token) => {
//   try {
//     const response = await axios.delete(`${baseURL}/menus/${menuId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error("Error deleting menu:", error);
//     throw error;
//   }
// };
