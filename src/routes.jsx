import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Category from "./pages/Category/Category";
import Course from "./pages/Course/Course";


const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/course-info/:courseName", element: <Course /> },
];

export default routes;
