import React from "react";
import LogoProIcon from "../../Icons/LogoProIcon";

const SideCard = () => {
  return (
    <div className="relative px-4 py-6 mt-6 rounded-xl sidebar-card bg-primary after:absolute after:-top-[65px] after:-right-[20px] after:w-[160px] after:h-[160px] after:bg-gradient-to-r after:from-[#ffffff42] via-transparent after:rounded-full before:absolute before:-bottom-1/4 before:-left-[45px] before:w-[160px] before:h-[160px] before:bg-gradient-to-r before:from-[#ffffff42] via-transparent before:rounded-full">
      <div className="relative z-10 flex flex-col items-center w-8/12 mx-auto space-y-3 sidebar-container">
        <LogoProIcon />
        <h2 className="font-semibold text-white">Dabang Pro</h2>
        <p className="text-[12px] font-medium tracking-wide text-center text-white text-opacity-90">
          Get access to all feature on tetumbas
        </p>
        <button className="w-full py-2 font-medium bg-white shadow-md rounded-xl ring-1 text-primary">
          Get Pro
        </button>
      </div>
    </div>
  );
};

export default SideCard;
