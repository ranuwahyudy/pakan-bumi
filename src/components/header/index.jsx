import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderLogo } from "../svgs";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isTukarPoin = location.pathname === "/tukar-poin";
  const isArtikel = location.pathname === "/artikel";
  const isTentangKami = location.pathname === "/tentang-kami";

  return (
    <header className="flex justify-center items-center px-20">
      <div className="w-full max-w-7xl flex justify-between border-b border-b-black py-5">
        <HeaderLogo />
        <div className="flex items-center gap-7">
          <nav className="flex items-center">
            <ul className="flex items-center gap-5">
              <li
                className={`${
                  isHome ? "text-semiBlack" : "text-semiBlack/75"
                } hover:text-semiBlack`}
              >
                <Link to="/">Home</Link>
                <div
                  className={`absolute w-5 h-[0.2rem] bg-black ${
                    isHome ? "block" : "hidden"
                  }`}
                />
              </li>
              <li
                className={`${
                  isTukarPoin ? "text-semiBlack" : "text-semiBlack/75"
                } hover:text-semiBlack`}
              >
                <Link to="/tukar-poin">Tukar Poin</Link>
                <div
                  className={`absolute w-5 h-[0.2rem] bg-black ${
                    isTukarPoin ? "block" : "hidden"
                  }`}
                />
              </li>
              <li
                className={`${
                  isArtikel ? "text-semiBlack" : "text-semiBlack/75"
                } hover:text-semiBlack`}
              >
                <Link to="/artikel">Artikel</Link>
                <div
                  className={`absolute w-5 h-[0.2rem] bg-black ${
                    isArtikel ? "block" : "hidden"
                  }`}
                />
              </li>
              <li
                className={`${
                  isTentangKami ? "text-semiBlack" : "text-semiBlack/75"
                } hover:text-semiBlack`}
              >
                <Link to="/tentang-kami">Tentang Kami</Link>
                <div
                  className={`absolute w-5 h-[0.2rem] bg-black ${
                    isTentangKami ? "block" : "hidden"
                  }`}
                />
              </li>
            </ul>
          </nav>
          <Link
            to="/login"
            className="px-10 py-1 bg-green-100 hover:bg-green-200 rounded font-semibold text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
