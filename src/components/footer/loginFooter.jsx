import React from "react";
import { LoginFooterCopyright } from "../svgs";

const LoginFooter = () => {
  return (
    <footer className="flex justify-center items-center px-20">
      <div className="w-full max-w-7xl flex flex-col items-center py-5">
        <span className="text-[#375679] text-xs flex gap-2">
          <LoginFooterCopyright />
          PakanBumi 2022
        </span>
        <div className="text-[#375679] text-xs flex gap-4 mt-2">
          <span>Cookie Policy</span>
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default LoginFooter;
