
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import App from "./App";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/Home";
const router = createBrowserRouter([
    {path: '', element: <App/> },
    { path: 'aboutus', element: <AboutUs/> },
    { path: 'register', element: <Register/> },
    {path:'login', element:<Login/>},
    {path:'home', element:<Home/>}
    
   

]);

export default router;
