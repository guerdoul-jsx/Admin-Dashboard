import { statsSalesProps } from "../../types";

function formatPriceShorthand(price: number) {
  const suffixes = ["", "k", "M", "B", "T"]; // Suffixes for thousands, millions, billions, trillions, etc.
  const suffixIndex = Math.floor(Math.log10(price) / 3); // Determine the appropriate suffix index based on the magnitude of the price

  // Calculate the price in the shorthand format
  const formattedPrice =
    (price / Math.pow(1000, suffixIndex)).toFixed() + suffixes[suffixIndex];

  // Return the formatted price
  return formattedPrice;
}

const StatsItem = (props: statsSalesProps) => {
  const { icon, name, percentage, count, price } = props;
  return (
    <div
      className={`flex flex-col p-4 rounded-xl ${
        name.includes("Sales") ? "bg-lightPink" : ""
      }  ${name.includes("Order") ? "bg-lightOrange" : ""} ${
        name.includes("Product") ? "bg-lightGreen" : ""
      } ${name.includes("Customers") ? "bg-lightPurple" : ""}`}
    >
      {/* <SalesStatsIcon /> */}
      <div className="flex flex-col ">
        {icon}
        <h1 className="my-3 text-xl font-bold text-Tcolor">
          {price ? "$" : ""}
          {price ? formatPriceShorthand(price) : count}
        </h1>
      </div>
      <h4 className="mb-2 text-sm font-semibold text-Tcolor">{name}</h4>
      <p className="text-[8px] font-medium text-primary">
        +{percentage}% from yesterday
      </p>
    </div>
  );
};

export default StatsItem;
