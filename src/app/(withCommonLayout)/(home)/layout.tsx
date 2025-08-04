import Navbar from "@/components/nav/Navbar";
import SubNav from "@/components/nav/SubNav";
import ScrollToTop from "@/components/shared/scroll-to-top";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" mx-auto  flex-grow">
        <SubNav />
        <Navbar />
        {children}
        <ScrollToTop />
      </div>
    </div>
  );
};

export default layout;
