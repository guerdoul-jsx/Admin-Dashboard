import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const index = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-full h-full">
      <Sidebar open={true} onClose={() => {}} />
    </div>
  );
};

export default index;
