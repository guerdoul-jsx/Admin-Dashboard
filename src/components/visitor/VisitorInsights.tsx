import LineChart from "../charts/LineChart";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "../../variables/visitorCharts";
import ChartTitle from "../charts/ChartTitle";

const VisitorInsights = () => {
  return (
    <div className="LineChart xl:col-span-1 bg-white rounded-xl h-[280px]">
      <ChartTitle name="Visitor Insights" />
      <LineChart
        options={lineChartOptionsTotalSpent}
        series={lineChartDataTotalSpent}
      />
      <div className="flex items-center justify-around p-1">
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
  );
};

export default VisitorInsights;
