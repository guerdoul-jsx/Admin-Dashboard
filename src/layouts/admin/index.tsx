import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import routes from "../../routes";
import { RoutesTypes } from "../../types";
import { useLocation } from "react-router-dom";
import Widgets from "../../components/widgets/Widgets";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";

const index = () => {
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Dashboard");
  const location = useLocation();

  React.useEffect(() => {
    getActiveRoute(routes);
    console.log("value of sidebar", open);
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
    <div className="flex flex-col w-full h-full">
      <Sidebar open={open} setOpen={setOpen} />
      <main className="xl:ml-[300px]">
        <Navbar brandText={currentRoute} setOpen={setOpen} open={open} />
      </main>
      <div className="xl:ml-[300px]">
        <div className="flex flex-wrap items-center m-2 md:p-4 xl:p-8">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default index;
