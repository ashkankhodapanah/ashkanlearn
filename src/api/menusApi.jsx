// دریافت  منوها (GET /menus)
const getMenus = async () => {
  try {
    const response = await axiosClient.get("/menus");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error getting menus:", error);
    throw error;
  }
};

// دریافت همه منوها (GET /menus/all)
const getAllMenus = async () => {
  try {
    const response = await axiosClient.get("/menus/all");
    return response.data;
  } catch (error) {
    console.error("Error getting all menus:", error);
    throw error;
  }
};

// ایجاد منو (POST /menus creator )
const createMenu = async (menuData, token) => {
  try {
    const response = await axiosClient.post("/menus", menuData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error creating menu:", error);
    throw error;
  }
};

// حذف منو بر اساس شناسه (DELETE /menus/id)
const deleteMenu = async (menuId, token) => {
  try {
    const response = await axiosClient.delete(`/menus/${menuId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error deleting menu:", error);
    throw error;
  }
};
