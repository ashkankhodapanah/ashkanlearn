import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/AuthSlice'; 

const rootReducer = combineReducers({
  auth: authReducer,
 
});

export default rootReducer;



import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  // اگر می‌خواهید از ابزارهای افزودنی Redux DevTools استفاده کنید:
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: process.env.NODE_ENV !== 'production',
});

export default store;
