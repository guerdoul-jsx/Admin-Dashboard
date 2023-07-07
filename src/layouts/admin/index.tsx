import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import routes from "../../routes";
import { RoutesTypes } from "../../types";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";

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

  const getRoutes = (routes: RoutesTypes[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Sidebar open={open} setOpen={setOpen} />
      <main className="xl:ml-[300px] h-full overflow-x-hidden">
        <Navbar brandText={currentRoute} setOpen={setOpen} open={open} />
        <div className="h-full max-w-[1050px]">
          <Routes>
            {getRoutes(routes)}
            <Route
              path="/"
              element={<Navigate to="/admin/default" replace />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default index;
