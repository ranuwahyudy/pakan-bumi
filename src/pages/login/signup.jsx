import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginLogoSmall } from "../../components/svgs";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold leading-8 text-3xl text-semiBlack">
            Silahkan <br />
            Registrasi!
          </h1>
          <LoginLogoSmall />
        </div>
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex flex-col text-semiBlack/70">
            <label className="text-2xs">Full Name</label>
            <input
              className="w-full py-2 px-3 border border-semiBlack/50 rounded-xl text-xs placeholder:text-xs placeholder-semiBlack/70 mt-1"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-semiBlack/70">
            <label className="text-2xs">Email Address</label>
            <input
              className="w-full py-2 px-3 border border-semiBlack/50 rounded-xl text-xs placeholder:text-xs placeholder-semiBlack/70 mt-1"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col text-semiBlack/70">
            <label className="text-2xs">Password</label>
            <div className="relative">
              <input
                className="w-full py-2 px-3 border border-semiBlack/50 rounded-xl text-xs placeholder:text-xs placeholder-semiBlack/70 mt-1"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 right-0 mr-3 mt-2 hover:opacity-80"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.146397 0.479889C0.0618432 0.564467 0.0104054 0.676551 0.00141538 0.795807C-0.00757469 0.915063 0.0264784 1.03359 0.0973971 1.12989L0.146397 1.18689L2.8364 3.87689C1.525 4.79581 0.588785 6.15665 0.199397 7.70989C0.170725 7.83731 0.193046 7.97088 0.261587 8.08206C0.330128 8.19323 0.439447 8.27317 0.566167 8.30479C0.692886 8.3364 0.826946 8.31718 0.939676 8.25123C1.05241 8.18528 1.13486 8.07784 1.1694 7.95189C1.51517 6.57333 2.36692 5.37531 3.5554 4.59589L4.7624 5.80289C4.27822 6.3062 4.01079 6.97934 4.01755 7.67769C4.02431 8.37605 4.30474 9.04388 4.79857 9.53772C5.2924 10.0315 5.96024 10.312 6.65859 10.3187C7.35695 10.3255 8.03009 10.0581 8.5334 9.57389L12.4794 13.5199C12.5686 13.6087 12.6881 13.6607 12.8139 13.6653C12.9398 13.6699 13.0627 13.6268 13.1582 13.5447C13.2537 13.4626 13.3147 13.3475 13.329 13.2224C13.3433 13.0973 13.3099 12.9714 13.2354 12.8699L13.1864 12.8129L9.1114 8.73689V8.73589L8.3114 7.93689L6.3984 6.02389H6.3994L4.4794 4.10489V4.10389L3.7244 3.34989L0.853397 0.479889C0.759633 0.386154 0.632479 0.333496 0.499897 0.333496C0.367315 0.333496 0.240161 0.386154 0.146397 0.479889ZM5.4694 6.50989L7.8254 8.86689C7.5107 9.16895 7.09015 9.33564 6.65396 9.33117C6.21778 9.32671 5.80072 9.15145 5.49228 8.84301C5.18384 8.53456 5.00858 8.11751 5.00411 7.68132C4.99965 7.24514 5.16633 6.82458 5.4684 6.50989H5.4694ZM6.6664 2.66689C5.9994 2.66689 5.3524 2.76489 4.7404 2.94989L5.5654 3.77389C6.99181 3.49134 8.47225 3.76773 9.70064 4.54589C10.929 5.32406 11.8114 6.5445 12.1654 7.95489C12.1999 8.08084 12.2824 8.18828 12.3951 8.25423C12.5078 8.32018 12.6419 8.3394 12.7686 8.30779C12.8953 8.27617 13.0047 8.19623 13.0732 8.08506C13.1417 7.97389 13.1641 7.84031 13.1354 7.71289C12.7737 6.27118 11.9407 4.99164 10.7686 4.07744C9.59663 3.16324 8.15279 2.66678 6.6664 2.66689ZM6.7964 5.00689L9.3304 7.53989C9.29793 6.87832 9.02053 6.25248 8.55217 5.78412C8.0838 5.31576 7.45797 5.03836 6.7964 5.00589V5.00689Z"
                    fill="#111111"
                    fillOpacity="0.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="flex gap-2 text-semiBlack/70"
              onClick={() => setRemember(!remember)}
            >
              <input type="checkbox" checked={remember} className="" />
              <label className="text-xs cursor-pointer">
                I agree to the{" "}
                <span className="text-[#1F83F9]">terms and condition</span>
              </label>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <button
          className="w-full py-3 font-semibold px-4 rounded-xl text-sm text-white bg-semiBlack/90 hover:bg-semiBlack"
          onClick={() => {
            if (remember) {
              localStorage.setItem("email", email);
              localStorage.setItem("password", password);
            }
            setEmail(localStorage.getItem("email"));
            setPassword(localStorage.getItem("password"));
            setShowPassword(false);
            setRemember(false);
          }}
        >
          Sign Up
        </button>
        <div className="flex justify-center gap-2">
          <span className="text-xs text-semiBlack/90">Have an account?</span>
          <Link
            to="/login"
            className="text-xs text-semiBlack/90 hover:text-semiBlack underline font-semibold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
