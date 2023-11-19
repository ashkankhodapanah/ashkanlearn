import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../apiConfig";

// ایجاد یک Async Thunk برای ثبت نام
export const registerAsync = createAsyncThunk(
  "auth/register",
  async (userData) => {
    const response = await axiosClient.post("/auth/register", userData);
    // console.log(response.data);
    return response.data;
  }
);

// ایجاد یک Async Thunk برای ورود
export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    try {
      const response = await axiosClient.post("/auth/login", credentials);
      // console.log(response.data);
      localStorage.setItem("token", response.data.accessToken);
      return response.data ;
    } catch (error) {
      // console.error("Error in loginAsync:", error);
      throw error;
    }
  }
);



// ایجاد یک Async Thunk برای دریافت اطلاعات کاربر
export const getUserInfoAsync = createAsyncThunk(
  "auth/getUserInfo",
  async (token) => {
    try {
      const response = await axiosClient.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response.data;
    } catch (error) {
      console.error("Error in getUserInfoAsync:", error);
      throw error;
    }
  }
);

// ایجاد یک slice با استفاده از createSlice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
   
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state, action) => {
        state.user = null;
        state.loading = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
      });

    builder
      .addCase(registerAsync.pending, (state, action) => {
        state.user = null;
        state.loading = true;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
      });

    builder
      .addCase(getUserInfoAsync.pending, (state, action) => {
        state.user = null;
        state.loading = true;
      })
      .addCase(getUserInfoAsync.fulfilled, (state, action) => {
        state.user = action.payload;
        state.login = false;
      })
      .addCase(getUserInfoAsync.rejected, (state, action) => {
        state.user = null;
        state.login = false;
      });
  },
});

// اکشن‌ها را از slice استخراج می‌کنیم
export const {} = authSlice.actions;

// reducer نهایی را از slice استخراج می‌کنیم
const authReducer = authSlice.reducer;

export default authReducer;
