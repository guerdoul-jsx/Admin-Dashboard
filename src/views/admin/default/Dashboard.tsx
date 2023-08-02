import SalesRevenue from "../../../components/sales/TodaysSales";
import VisitorInsights from "../../../components/visitor/VisitorInsights";
import Revenue from "../../../components/revenue/Revenue";
import Customers from "../../../components/customers/Customers";
import TargetAndReality from "../../../components/charts/TargetAndReality";
import {
  SalesChartDataTotalSales,
  SalesChartOptionsTotalSales,
} from "../../../variables/RealitySales";

const Dashboard = () => {
  return (
    <>
      <div className="grid justify-around grid-cols-1 gap-1 px-4 mt-3 xl:grid-cols-3 lg:grid-cols-2 xl:gap-x-3">
        <SalesRevenue />
        <VisitorInsights />
      </div>
      <div className="grid grid-cols-1 px-4 mt-3 md:grid-cols-2 xl:grid-cols-3 gap-y-2 xl:gap-y-0 gap-x-4 animate-fade-right animate-delay-1500">
        <Revenue />
        <Customers />
        <TargetAndReality
          SalesChartDataTotalSales={SalesChartDataTotalSales}
          SalesChartOptionsTotalSales={
            SalesChartOptionsTotalSales as ApexCharts.ApexOptions
          }
        />
      </div>
    </>
  );
};

export default Dashboard;
