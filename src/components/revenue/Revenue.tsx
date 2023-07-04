import Card from "../card/Card";
import ChartTitle from "../charts/ChartTitle";
import ReactApexChart from "react-apexcharts";
import {
  SalesChartDataTotalSales,
  SalesChartOptionsTotalSales,
} from "../../variables/salesCharts";
const Revenue = () => {
  return (
    <Card>
      <ChartTitle name="Total Revenue" />
      <ReactApexChart
        type="bar"
        options={SalesChartOptionsTotalSales as ApexCharts.ApexOptions}
        series={SalesChartDataTotalSales}
      />
    </Card>
  );
};

export default Revenue;
