import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/index";
import routes from "../../routes";
import { RoutesTypes } from "../../types";
import { useLocation } from "react-router-dom";

const index = () => {
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Dashboard");
  const location = useLocation();

  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes: RoutesTypes[]) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };

  return (
    <div className="flex flex-row w-full h-full">
      <Sidebar open={open} onClose={() => {}} setOpen={setOpen} />
      <main className="flex-1 xl:ml-[300px]">
        <Navbar brandText={currentRoute} setOpen={setOpen} open={open} />
      </main>
    </div>
  );
};

export default index;
