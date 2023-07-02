import React from "react";
import DummyLogo from "../../Icons/DummyLogo";
import { Link } from "react-router-dom";
import routes from "../../routes";
import Links from "./Links";
import SideCard from "./SideCard";
import { XMarkIcon } from "@heroicons/react/20/solid";

const Sidebar = (props) => {
  const { open, setOpen, onClose } = props;
  return (
    // <>
    //   {open && (

    //   )}
    // </>
    <aside
      className={`duration-500 ${
        open ? "-translate-x-[300px]" : "translate-x-0"
      } xl:flex max-w-[300px] z-50 h-screen bg-white px-6 py-3 shadow-lg w-full fixed left-0 top-0 overflow-y-auto scrollbar-default`}
    >
      <XMarkIcon
        className="absolute right-0 w-8 h-8 font-bold transition-all duration-500 cursor-pointer xl:hidden top-10 hover:rotate-180"
        onClick={() => setOpen(!open)}
      />
      <main className="flex flex-col space-y-8">
        <div className="flex items-center justify-between my-4 sidebar-logo">
          <DummyLogo />
          <h1 className="flex-1 ml-2 text-2xl font-bold text-Tcolor">Dabang</h1>
        </div>
        <ul className="flex flex-col space-y-2 nav-links">
          <Links routes={routes} />
        </ul>
        <SideCard />
      </main>
    </aside>
  );
};

export default Sidebar;
