import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
// import { useMaterialTailwindController, setOpenSidenav } from "@/context";

export function Sidenav({ brandImg, routes }) {
  // const [controller, dispatch] = useMaterialTailwindController();
  // const { sidenavColor, sidenavType, openSidenav } = controller;


  return (
    <aside
      className={`bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 translate-x-0 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
    >
      <div
        className={`relative border-b border-white/20`}
      >
        <Link to="/" className="flex items-center gap-4 py-6 px-8">
          <Avatar src={"https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=996&t=st=1695653887~exp=1695654487~hmac=d58af7fe65dbe447f94ac1482b1e483928361c40de9f345febdd4a63b7d7c8c6"} size="sm" />
          <Typography
            variant="h6"
            color="white"
          >
            GradGuide
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          // onClick={() => setOpenSidenav(dispatch, false)}
        >
          {/* <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" /> */}
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={"bg-white shadow-lg"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={
                        isActive
                          ? "green"
                          // : sidenavType === "dark"
                          // ? "white"
                          : "blue-gray"
                      }
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

// Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
