import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import routes from "../../routes";
import { RoutesTypes } from "../../types";
import { useLocation } from "react-router-dom";
import Widgets from "../../components/widgets/Widgets";
import LineChart from "../../components/charts/LineChart";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../variables/charts";

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
        <div className="flex flex-wrap justify-around gap-2 mt-3">
          <Widgets />
          <div className="LineChart bg-white rounded-xl h-[280px] p-4">
            <h1 className="font-semibold text-Tcolor">Visitor Insights</h1>
            <LineChart
              options={lineChartOptionsTotalSpent}
              series={lineChartDataTotalSpent}
            />
            <div className="flex items-center justify-around">
              <div className="flex items-center">
                <span className="w-[15px] h-[15px] bg-purpleLine rounded-md mr-1"></span>
                <p className="text-[10px] text-secondary">Loyal Customers</p>
              </div>
              <div className="flex items-center">
                <span className="w-[15px] h-[15px] bg-redLine rounded-md mr-1"></span>
                <p className="text-[10px] text-secondary">New Customers</p>
              </div>
              <div className="flex items-center">
                <span className="w-[15px] h-[15px] bg-greenLine rounded-md mr-1"></span>
                <p className="text-[10px] text-secondary">Unique Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
