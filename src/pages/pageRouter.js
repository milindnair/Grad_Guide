import Home from "./Home/Home";
import Login from "./Login/login";

const pagesData = [
    {
      path: "/",
      element: <Home />,
      title: "Home"
    },
    {
      path: "/login",
      element: <Login/>,
      title: "login"
    },
  
  ];
  
  export default pagesData;