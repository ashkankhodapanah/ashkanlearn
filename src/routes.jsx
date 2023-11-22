import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


const routes = [
  { path: "/", element: <Index /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  // { path: "/", element: < /> },
  // { path: "/", element: < /> },


];

export default routes;
