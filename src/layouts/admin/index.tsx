import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import routes from "../../routes";
import { RoutesTypes } from "../../types";
import { useLocation } from "react-router-dom";

import SalesRevenue from "../../components/sales/TodaysSales";
import VisitorInsights from "../../components/visitor/VisitorInsights";
import ChartTitle from "../../components/charts/ChartTitle";
import Card from "../../components/card/Card";

import ReactApexChart from "react-apexcharts";

import Revenue from "../../components/revenue/Revenue";

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
    <div className="flex flex-col w-full h-full">
      <Sidebar open={open} setOpen={setOpen} />
      <main className="xl:ml-[300px] h-full overflow-x-hidden">
        <Navbar brandText={currentRoute} setOpen={setOpen} open={open} />
        <div className="h-full max-w-[1050px]">
          <div className="grid justify-around grid-cols-1 gap-1 px-4 mt-3 xl:grid-cols-3 lg:grid-cols-2 xl:gap-x-3">
            <SalesRevenue />
            <VisitorInsights />
          </div>
          <div className="grid grid-cols-1 px-4 mt-3 md:grid-cols-2 xl:grid-cols-3 gap-y-2 xl:gap-y-0 gap-x-4">
            <Revenue />
            <Card>
              <ChartTitle name="Customer Satisfaction" />
              <ReactApexChart type="area" height={350} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
