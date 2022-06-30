import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderLogo } from "../svgs";

const LoginHeader = () => {
  const location = useLocation();

  const isLogin = location.pathname === "/login";
  const isSignup = location.pathname === "/signup";

  const active = "px-5 py-1 bg-white hover:opacity-90 rounded font-semibold";
  const inactive =
    "px-5 py-1 bg-transparent hover:bg-white/10 text-semiGray rounded font-semibold cursor-not-allowed";

  return (
    <header className="flex justify-center items-center px-20 bg-semiBlack">
      <div className="w-full max-w-7xl flex justify-between py-5">
        <div className="bg-white px-10">
          <HeaderLogo />
        </div>
        <nav className="flex justify-between items-center gap-5">
          <Link className={isLogin ? inactive : active} to="/login">
            Login
          </Link>
          <Link className={isSignup ? inactive : active} to="/signup">
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default LoginHeader;
