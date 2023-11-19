import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import {  useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const router = useRoutes(routes);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.current);
  useEffect(async () => {
    console.log(isLoggedIn);
    console.log(currentUser);
   
  }, []);

  return <>{router}</>;
}
