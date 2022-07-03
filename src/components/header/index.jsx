import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderLogo } from "../svgs";

const Header = () => {
  const location = useLocation();

  const isHome = /^\/$/g.test(location.pathname);
  const isTukarPoin = /^\/\btukar-poin\b.*$/g.test(location.pathname);
  const isArtikel = /^\/\bartikel\b.*$/g.test(location.pathname);
  const isTentangKami = /^\/\btentang-kami\b.*$/g.test(location.pathname);

  const isProfile = /^\/\bprofile\b.*$/g.test(location.pathname);

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <header className="flex justify-center items-center px-20">
      <div className="w-full max-w-7xl flex justify-between border-b border-b-black py-5">
        <HeaderLogo />
        <div className="flex items-center gap-10">
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
          {isLoggedIn ? (
            <div
              className={`${
                isProfile ? "text-semiBlack" : "text-semiBlack/75"
              } hover:text-semiBlack`}
            >
              <Link className="flex gap-2 items-center" to="/profile">
                Raffi{" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM15 7.5C17.4125 7.5 19.375 9.4625 19.375 11.875C19.375 14.2875 17.4125 16.25 15 16.25C12.5875 16.25 10.625 14.2875 10.625 11.875C10.625 9.4625 12.5875 7.5 15 7.5ZM15 25C12.4625 25 9.4625 23.975 7.325 21.4C9.51451 19.6821 12.217 18.7485 15 18.7485C17.783 18.7485 20.4855 19.6821 22.675 21.4C20.5375 23.975 17.5375 25 15 25Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <div
                className={`absolute w-5 h-[0.2rem] bg-black ${
                  isProfile ? "block" : "hidden"
                }`}
              />
            </div>
          ) : (
            <Link
              to="/login"
              className="px-10 py-1 bg-green-100 hover:bg-green-200 rounded font-semibold text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;