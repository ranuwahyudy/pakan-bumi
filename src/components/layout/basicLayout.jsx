import React from "react";

const BasicLayout = ({ children }) => {
  return (
    <div className="flex justify-center px-20">
      <div className="w-full max-w-7xl">{children}</div>
    </div>
  );
};

export default BasicLayout;
