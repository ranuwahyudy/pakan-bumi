import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#F2F2F2]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
