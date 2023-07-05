import Card from "../card/Card";
import ChartTitle from "../charts/ChartTitle";
import ReactApexChart from "react-apexcharts";
import {
  CustomersChartData,
  CustomersChartOptions,
} from "../../variables/customersCharts";

const Customers = () => {
  return (
    <Card>
      <ChartTitle name="Customer Satisfaction" />
      <ReactApexChart
        type="area"
        series={CustomersChartData}
        options={CustomersChartOptions as ApexCharts.ApexOptions}
      />
      <div className="flex justify-around customers-details">
        <div className="flex items-start space-x-3">
          <span className="w-[20px] h-[5px] bg-lBlue mt-2 relative rounded-md before:absolute before:left-1/2 before:top-[52%] before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:bg-[#0095FF] before:h-2 before:rounded-full before:shadow-md"></span>
          <div className="flex flex-col">
            <h1 className="text-sm text-secondary">Last Month</h1>
            <p className="text-sm font-semibold text-Tcolor">$3,004</p>
          </div>
        </div>
        <label className="w-[2px] h-2/3 mb-auto bg-[#96A5B8]"></label>
        <div className="flex items-start space-x-3">
          <span className="w-[20px] h-[5px] bg-lGreen mt-2 relative rounded-md before:absolute before:left-1/2 before:top-[52%] before:-translate-x-1/2 before:-translate-y-1/2 before:w-2 before:bg-[#07E098] before:h-2 before:rounded-full before:shadow-md"></span>
          <div className="flex flex-col">
            <h1 className="text-sm text-secondary">Last Month</h1>
            <p className="text-sm font-semibold text-Tcolor">$3,004</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Customers;
