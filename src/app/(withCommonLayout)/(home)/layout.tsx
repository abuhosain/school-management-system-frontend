import SubNav from "@/components/SubNav";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" mx-auto  flex-grow">
        <SubNav />
        {children}
      </div>
    </div>
  );
};

export default layout;