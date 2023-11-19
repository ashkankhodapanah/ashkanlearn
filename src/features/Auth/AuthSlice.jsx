import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../api/authApi";

export const register = createAsyncThunk("auth/register", async (payload) => {
  const response = await authApi.register(payload);
  // console.log(response)
  //save data to local storage
  // localStorage.setItem("user", JSON.parse(response.config.data).username);
  // localStorage.setItem("token", response.data.access);
  const responseData = {
    data: response.data,
  };
  return responseData;
});

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authApi.login(payload);
      const usertoken = response.data.accessToken;
      localStorage.setItem("token", usertoken);
      const responseUser = await authApi.getUser(usertoken);
      const user = { ...responseUser.data };
      const data = { ...user };
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    current: JSON.parse(localStorage.getItem("user")) || {},
    settings: {},
    loading: false,
    error: null,
    isLoggedIn: localStorage.getItem("token") ? true : false,
  },
  reducers: {
    logout(state) {
      //clear local storage
      state.current = {};
      state.isLoggedIn=false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    


  },
  // استفاده از builder callback به جای extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.current = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isLoggedIn=false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.current = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn=true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isLoggedIn=false;
      });
  },
});

const { actions, reducer } = AuthSlice;
export const { logout } = actions;
export default reducer;
