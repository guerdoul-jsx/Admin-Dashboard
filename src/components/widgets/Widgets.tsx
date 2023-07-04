import Card from "../card/Card";
import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import { WidgetsProps } from "../../types";
import StatsItem from "../sales/StatsItem";

const Widgets = (props: WidgetsProps) => {
  const { statsSales } = props;
  return (
    <Card extra="xl:col-span-2 w-full">
      <div className="sales-container xl:h-[280px] p-4">
        <div className="flex items-center justify-between section-info">
          <div>
            <h1 className="text-xl font-semibold">Today’s Sales</h1>
            <h2 className="text-sm text-secondary">Sales Summery</h2>
          </div>
          <button className="flex items-center space-x-2 p-2 text-Tcolor rounded-md mr-4 border-[1px] border-body cursor-pointer">
            <ArrowUpTrayIcon className="w-4 h-4 mr-1" />
            Export
          </button>
        </div>
        <div className="grid gap-2 my-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 cards-container">
          {statsSales.map(
            ({ icon, name, percentage, count, price }, index: number) => {
              return (
                <StatsItem
                  icon={icon}
                  name={name}
                  percentage={percentage}
                  count={count}
                  price={price}
                  key={index}
                />
              );
            }
          )}
        </div>
      </div>
    </Card>
  );
};

export default Widgets;
