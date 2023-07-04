import Card from "../card/Card";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import SalesStatsIcon from "../../Icons/salesStatsIcon";
import OrderStatsIcon from "../../Icons/orderStatsIcon";
import ProductStatsIcon from "../../Icons/ProductStatsIcon";
import CustomersStatsIcon from "../../Icons/CustomersStatsIcon";

const statsSales = [
  {
    name: "Total Sales",
    price: 1000,
    percentage: 8,
    icon: <SalesStatsIcon />,
  },
  {
    name: "Total Order",
    percentage: 5,
    count: 300,
    icon: <OrderStatsIcon />,
  },
  {
    name: "Product Sold",
    percentage: 1.2,
    count: 5,
    icon: <ProductStatsIcon />,
  },
  {
    name: "New Customers",
    percentage: 0.5,
    count: 8,
    icon: <CustomersStatsIcon />,
  },
];

function formatPriceShorthand(price: number) {
  const suffixes = ["", "k", "M", "B", "T"]; // Suffixes for thousands, millions, billions, trillions, etc.
  const suffixIndex = Math.floor(Math.log10(price) / 3); // Determine the appropriate suffix index based on the magnitude of the price

  // Calculate the price in the shorthand format
  const formattedPrice =
    (price / Math.pow(1000, suffixIndex)).toFixed() + suffixes[suffixIndex];

  // Return the formatted price
  return formattedPrice;
}

const Widgets = () => {
  return (
    <Card>
      <div className="sales-container xl:h-[280px] p-4">
        <div className="flex items-center justify-between place-items-center section-info">
          <div>
            <h1 className="text-xl font-semibold">Today’s Sales</h1>
            <h2 className="text-sm text-secondary">Sales Summery</h2>
          </div>
          <button className="flex items-center space-x-2 p-2 rounded-md mr-4 border-[1px] border-body cursor-pointer">
            <ArrowUpTrayIcon className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
        <div className="flex flex-wrap items-center justify-around lg:justify-normal gap-2 my-4 cards-container">
          {statsSales.map((state) => {
            return (
              <div
                className={`flex flex-col p-4 rounded-xl  ${
                  state.name.includes("Sales") && "bg-lightPink"
                }  ${state.name.includes("Order") && "bg-lightOrange"} ${
                  state.name.includes("Product") && "bg-lightGreen"
                } ${
                  state.name.includes("Customers") && "bg-lightPurple"
                } w-[150px]`}
              >
                {/* <SalesStatsIcon /> */}
                {state.icon}
                <h1 className="my-3 text-xl font-bold text-Tcolor">
                  {state.price ? "$" : ""}
                  {state.price
                    ? formatPriceShorthand(state.price)
                    : state.count}
                </h1>
                <h4 className="mb-2 text-sm font-semibold text-Tcolor">
                  {state.name}
                </h4>
                <p className="text-[8px] font-medium text-primary">
                  +{state.percentage}% from yesterday
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default Widgets;
