import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoginFooter from "../footer/loginFooter";
import LoginHeader from "../header/loginHeader";

const LoginLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="bg-gradient-to-b from-white to-[#F2F2F2] h-screen">
      <LoginHeader />
      <main className="w-full h-[70vh] flex justify-center items-center mb-5">
        <div className="w-full max-w-[22rem] h-[28rem] bg-white shadow rounded-[2rem] mt-14 px-8 pt-8 pb-4">
          <Outlet />
        </div>
      </main>
      <LoginFooter />
    </div>
  );
};

export default LoginLayout;