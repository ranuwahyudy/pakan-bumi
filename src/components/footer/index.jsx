import React from "react";
import { Link } from "react-router-dom";
import { LogoCopyFooter, LogoFooter, SocialLogo } from "../svgs";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center px-20 bg-semiBlack pb-10 h-60 mt-20 relative">
      <div className="w-full max-w-7xl flex justify-between py-5">
        <div className="flex items-center gap-3">
          <LogoFooter />
          <p className="w-60 text-white text-xs">
            Mengolah sampah makanan menjadi pupuk dan pakan ternak secara
            bertanggung jawab
          </p>
        </div>
        <div className="flex gap-36 text-white">
          <div className="flex flex-col justify-between">
            <p className="font-semibold">Kontak</p>
            <p className="text-sm">(021) 8278908</p>
            <p className="text-sm">hello@pakanbumi.com</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold">Akun</p>
            <Link to="/login" className="text-sm">
              Login
            </Link>
            <Link to="/register" className="text-sm">
              Register
            </Link>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold">Follow Us</p>
            <p className="text-sm">Yes, we are social</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/">
                <SocialLogo.Facebook />
              </a>
              <a href="https://www.twitter.com/">
                <SocialLogo.Twitter />
              </a>
              <a href="https://www.instagram.com/">
                <SocialLogo.Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bg-black left-0 bottom-0 h-8 flex justify-center items-center text-white gap-2">
        <LogoCopyFooter />
        PakanBumi 2022
      </div>
    </footer>
  );
};

export default Footer;
