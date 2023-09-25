import CollegePredictor from "./CollegePredictor/CollegePredictor";
import DashboardHome from "./DashboardHome/DashboardHome";
import Home from "./Home/Home";
import Login from "./Login/login";
import Profile from "./Profile/Profile";
import SearchFeedback from "./SearchFeedback/SearchFeedback";

const pagesData = [
  {
    layout: "dashboard",
    pages: [
      {
        icon:"",
        path: "/home",
        element: <DashboardHome />,
        name: "Home"
      },
      {
        icon:"",
        path: "/Profile",
        element: <Profile/>,
        name: "Profile"
      },
      {
        icon:"",
        path: "/searchFeedback",
        element: <SearchFeedback />,
        name: "searchFeedback"
      },
      {
        icon:"",
        path: "/CollegePredictor",
        element: <CollegePredictor />,
        name: "CollegePredictor"
      },
    ],
  },
  
  ];
  
  export default pagesData;