import Card from "../card/Card";
import ChartTitle from "./ChartTitle";
import ReactApexChart from "react-apexcharts";
import BagIcon from "../../Icons/BagIcon";
import TicketIcon from "../../Icons/TicketIcon";
import {
  totalRealitySales,
  totalTargetSales,
} from "../../variables/RealitySales";

type SalesChartDataReality = {
  name: string;
  data: number[];
  color: string;
}[];
type TargetAndRealityProps = {
  SalesChartOptionsTotalSales: ApexCharts.ApexOptions;
  SalesChartDataTotalSales: SalesChartDataReality;
};

const TargetAndReality = (props: TargetAndRealityProps) => {
  function formatPriceWithCommas(price: number): string {
    // Convert price to string and remove any existing commas
    let priceStr: string = price.toString().replace(/,/g, "");

    // Check if price has more than 4 digits
    if (priceStr.length > 3) {
      // Insert commas every three digits from the right
      priceStr = priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return priceStr;
  }

  const { SalesChartOptionsTotalSales, SalesChartDataTotalSales } = props;
  return (
    <Card>
      <ChartTitle name="Target vs Reality" />
      <ReactApexChart
        type="bar"
        options={SalesChartOptionsTotalSales as ApexCharts.ApexOptions}
        series={SalesChartDataTotalSales}
      />
      <div className="flex flex-col m-3">
        <div className="flex items-center w-full">
          <div className="bg-[#E2FFF3] w-10 h-10 rounded-md flex items-center justify-center mr-2">
            <BagIcon />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-Tcolor">Reality Sales</h1>
            <p className="text-sm text-secondary">Gblobal</p>
          </div>
          <h1 className="mx-auto font-semibold text-[#4AB58E]">
            {formatPriceWithCommas(totalRealitySales)}
          </h1>
        </div>
        <div className="flex items-center w-full">
          <div className="bg-[#FFF4DE] w-10 h-10 rounded-md flex items-center justify-center mr-2">
            <TicketIcon />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-Tcolor">Target Sales</h1>
            <p className="text-sm text-secondary">Commercial</p>
          </div>
          <h1 className="mx-auto font-semibold text-[#FFA800]">
            {formatPriceWithCommas(totalTargetSales)}
          </h1>
        </div>
      </div>
    </Card>
  );
};

export default TargetAndReality;
