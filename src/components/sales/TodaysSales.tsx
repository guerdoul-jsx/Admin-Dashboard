import Widgets from "../widgets/Widgets";
import SalesStatsIcon from "../../Icons/salesStatsIcon";
import OrderStatsIcon from "../../Icons/orderStatsIcon";
import ProductStatsIcon from "../../Icons/ProductStatsIcon";
import CustomersStatsIcon from "../../Icons/CustomersStatsIcon";

import { statsSalesProps } from "../../types";

const statsSales: statsSalesProps[] = [
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

const SalesRevenue = () => {
  return <Widgets statsSales={statsSales} />;
};

export default SalesRevenue;
