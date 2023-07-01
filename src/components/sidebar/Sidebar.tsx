import React from "react";
import DummyLogo from "../../Icons/DummyLogo";
import { Link } from "react-router-dom";
import routes from "../../routes";
import Links from "./Links";
type SidebarProps = {
  open: boolean;
  onClose: () => void;
};
const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <aside className="max-w-[345px] h-screen bg-white px-12 py-6 shadow-lg w-full">
      <main className="flex flex-col px- ">
        <div className="flex items-center justify-between my-4 sidebar-logo">
          <DummyLogo />
          <h1 className="flex-1 ml-2 text-2xl font-bold text-Tcolor">Dabang</h1>
        </div>
        <ul className="flex flex-col space-y-4 nav-links">
          <Links routes={routes} />
        </ul>
      </main>
    </aside>
  );
};

export default Sidebar;
