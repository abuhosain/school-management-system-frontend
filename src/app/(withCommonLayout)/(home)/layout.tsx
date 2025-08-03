import Navbar from "@/components/nav/Navbar";
import SubNav from "@/components/nav/SubNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" mx-auto  flex-grow">
        <SubNav />
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;