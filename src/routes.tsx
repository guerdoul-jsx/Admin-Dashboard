// Admin Imports

import Dashboard from "./views/admin/default/Dashboard";
import Leaderboard from "./views/admin/leaderboard/Leaderboard";
import { Messages } from "./views/admin/messages/Messages";
import Order from "./views/admin/order/Order";
import Products from "./views/admin/products/Products";
import SalesReport from "./views/admin/sales/SalesReport";
import Settings from "./views/admin/settings/Settings";

// User Imports
import SignOut from "./views/auth/Authentication/signout/SignOut";

// Icons
import DashboardIcon from "./Icons/DashboardIcon";
import OrderIcon from "./Icons/OrderIcon";
import ProductsIcon from "./Icons/ProductsIcon";
import LeaderBoardIcon from "./Icons/LeaderBoardIcon";
import MessagesIcon from "./Icons/MessagesIcon";
import SettingIcon from "./Icons/SettingIcon";
import SalesIcon from "./Icons/SalesIcon";
import SignOutIcon from "./Icons/SignOutIcon";
import DashboardActiveIcon from "./Icons/DashboardActiveIcon";
import LeaderBoardActiveIcon from "./Icons/LeaderBoardActiveIcon";
import ProductsActiveIcon from "./Icons/ProductsActiveIcon";
import OrderActiveIcon from "./Icons/OrderActiveIcon";
import MessagesActiveIcon from "./Icons/MessagesActiveIcon";
import SalesActiveIcon from "./Icons/SalesActiveIcon";
import SettingActiveIcon from "./Icons/SettingActiveIcon";
import SignOutActiveIcon from "./Icons/SignOutActiveIcon";

import { RoutesTypes } from "./types";

const routes: RoutesTypes[] = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <DashboardIcon />,
    activeIcon: <DashboardActiveIcon />,
    component: <Dashboard />,
  },
  {
    name: "Leaderboard",
    layout: "/admin",
    path: "leaderboard",
    icon: <LeaderBoardIcon />,
    activeIcon: <LeaderBoardActiveIcon />,
    component: <Leaderboard />,
  },
  {
    name: "Products",
    layout: "/admin",
    path: "products",
    icon: <ProductsIcon />,
    activeIcon: <ProductsActiveIcon />,
    component: <Products />,
  },
  {
    name: "Order",
    layout: "/admin",
    path: "order",
    icon: <OrderIcon />,
    activeIcon: <OrderActiveIcon />,
    component: <Order />,
  },
  {
    name: "Messages",
    layout: "/admin",
    path: "messages",
    icon: <MessagesIcon />,
    activeIcon: <MessagesActiveIcon />,
    component: <Messages />,
  },
  {
    name: "Sales Report",
    layout: "/admin",
    path: "sales",
    icon: <SalesIcon />,
    activeIcon: <SalesActiveIcon />,
    component: <SalesReport />,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "settings",
    icon: <SettingIcon />,
    activeIcon: <SettingActiveIcon />,
    component: <Settings />,
  },
  {
    name: "SignOut",
    layout: "/auth",
    path: "signout",
    icon: <SignOutIcon />,
    activeIcon: <SignOutActiveIcon />,
    component: <SignOut />,
  },
];

export default routes;
