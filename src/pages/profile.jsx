import React, { useEffect } from "react";
import BasicLayout from "../components/layout/basicLayout";
import { useSearchParams, useNavigate } from "react-router-dom";
import { TransactionHistoryIcon } from "../components/svgs";

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <BasicLayout>
      <div className="flex mt-10 items-center justify-between">
        <div className="flex gap-5 items-center">
          <img src="/profile/profpic.png" alt="profile" />
          <div>
            <p className="font-semibold text-xl text-[#1A1A1A]">Raffi Ahmad</p>
            <p className="text-[#486A7D]">@Raffiahmad</p>
          </div>
        </div>
        <div className="relative">
          <h2 className="absolute top-14 left-14 text-white font-medium text-2xl">
            Total Poin
          </h2>
          <p className="absolute bottom-20 right-20 text-white font-medium text-3xl">
            10000 Poin
          </p>
          <svg
            width="375"
            height="244"
            viewBox="0 0 375 244"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_713_501)">
              <rect
                x="30"
                y="26"
                width="315"
                height="184"
                rx="12"
                fill="url(#paint0_linear_713_501)"
              />
            </g>
            <mask
              id="mask0_713_501"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="30"
              y="26"
              width="315"
              height="184"
            >
              <rect
                x="30"
                y="26"
                width="315"
                height="184"
                rx="12"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_713_501)">
              <ellipse
                opacity="0.1"
                cx="61.5"
                cy="258"
                rx="160.5"
                ry="113"
                fill="black"
              />
              <ellipse
                opacity="0.08"
                cx="320.5"
                cy="-3"
                rx="160.5"
                ry="113"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_713_501"
                x="0"
                y="0"
                width="375"
                height="244"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_713_501"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_713_501"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_713_501"
                x1="96.15"
                y1="63.904"
                x2="183.668"
                y2="235.356"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0ACF83" />
                <stop offset="1" stopColor="#0BB967" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex gap-10 mt-20">
        <div className="flex flex-col gap-5">
          <button
            onClick={() => {
              setSearchParams({
                tabs: "profile",
              });
            }}
            className={`p-2 w-44 text-sm font-semibold rounded ${
              searchParams.get("tabs") !== "history-transaksi"
                ? "bg-[#EAF8F5] text-[#083A50]"
                : "text-[#CACED8]"
            }`}
          >
            Profile
          </button>
          <button
            onClick={() => setSearchParams({ tabs: "history-transaksi" })}
            className={`p-2 w-44 text-sm font-semibold rounded ${
              searchParams.get("tabs") === "history-transaksi"
                ? "bg-[#EAF8F5] text-[#083A50]"
                : "text-[#CACED8]"
            }`}
          >
            History Transaksi
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/");
            }}
            className="p-2 w-44 text-sm font-semibold rounded text-[#CACED8]"
          >
            Logout
          </button>
        </div>
        <div className="w-[2px] h-60 bg-[#E8EAEE]/40" />
        <main className="w-full">
          {searchParams.get("tabs") === "history-transaksi" ? (
            <>
              <h1 className="text-[#CACED8] font-semibold text-xl">
                History Transaksi
              </h1>
              <div className="flex justify-end w-full">
                <div className="flex items-center gap-2 p-2 rounded-lg overflow-hidden w-60 border border-[#E1E1E1] text-[#CACED8]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8616 15.184L11.9725 11.2958C13.0157 10.0967 13.6474 8.53215 13.6474 6.82217C13.6474 3.05809 10.5851 0 6.82369 0C3.05877 0 0 3.06164 0 6.82217C0 10.5827 3.06232 13.6443 6.82369 13.6443C8.53404 13.6443 10.0989 13.0129 11.2983 11.9698L15.1874 15.8581C15.2797 15.9503 15.4039 16 15.5245 16C15.6452 16 15.7694 15.9539 15.8616 15.8581C16.0461 15.6736 16.0461 15.3685 15.8616 15.184ZM0.954535 6.82217C0.954535 3.5867 3.58749 0.957871 6.82014 0.957871C10.0563 0.957871 12.6857 3.59024 12.6857 6.82217C12.6857 10.0541 10.0563 12.69 6.82014 12.69C3.58749 12.69 0.954535 10.0576 0.954535 6.82217Z"
                      fill="#313A4E"
                      fillOpacity="0.5"
                    />
                  </svg>
                  <input
                    className="text-sm w-full outline-none placeholder:text-[#CACED8]"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
              <table className="w-full table mt-16">
                <thead className="w-full">
                  <tr className="text-[#486A7D] font-semibold">
                    <th className="text-left">Nama</th>
                    <th className="text-left">Kategori</th>
                    <th className="text-left">Tanggal</th>
                    <th className="text-right">Berat Sampah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="py-5">
                      <div className="flex items-center">
                        <div className="p-2 rounded bg-[#EFEFEF]">
                          <TransactionHistoryIcon />
                        </div>
                        <div className="ml-2">
                          <p className="text-sm">Raffi Ahmad</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">Rumah Tangga</p>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">15 Juni 2022</p>
                    </td>
                    <td className="text-right">
                      <p className="text-sm font-semibold">500 gram</p>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-5">
                      <div className="flex items-center">
                        <div className="p-2 rounded bg-[#EFEFEF]">
                          <TransactionHistoryIcon />
                        </div>
                        <div className="ml-2">
                          <p className="text-sm">Raffi Ahmad</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">Mitra</p>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">16 Juni 2022</p>
                    </td>
                    <td className="text-right">
                      <p className="text-sm font-semibold">500 gram</p>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-5">
                      <div className="flex items-center">
                        <div className="p-2 rounded bg-[#EFEFEF]">
                          <TransactionHistoryIcon />
                        </div>
                        <div className="ml-2">
                          <p className="text-sm">Raffi Ahmad</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">Rumah Tangga</p>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">17 Juni 2022</p>
                    </td>
                    <td className="text-right">
                      <p className="text-sm font-semibold">1000 gram</p>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-5">
                      <div className="flex items-center">
                        <div className="p-2 rounded bg-[#EFEFEF]">
                          <TransactionHistoryIcon />
                        </div>
                        <div className="ml-2">
                          <p className="text-sm">Raffi Ahmad</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">Mitra</p>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">18 Juni 2022</p>
                    </td>
                    <td className="text-right">
                      <p className="text-sm font-semibold">500 gram</p>
                    </td>
                  </tr>
                  <tr className="">
                    <td className="py-5">
                      <div className="flex items-center">
                        <div className="p-2 rounded bg-[#EFEFEF]">
                          <TransactionHistoryIcon />
                        </div>
                        <div className="ml-2">
                          <p className="text-sm">Raffi Ahmad</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">Rumah Tangga</p>
                    </td>
                    <td className="text-left">
                      <p className="text-sm">19 Juni 2022</p>
                    </td>
                    <td className="text-right">
                      <p className="text-sm font-semibold">1000 gram</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <>
              {searchParams.get("edit") === "true" ? (
                <>
                  <h1 className="text-[#CACED8] font-semibold text-xl">
                    Profile
                  </h1>
                  <ul className="mt-10 flex flex-col gap-7">
                    <li>
                      <p className="text-[#486A7D] font-semibold">
                        Nama Lengkap
                      </p>
                      <input
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        type="text"
                        placeholder="Nama Lengkap"
                      />
                    </li>
                    <li>
                      <p className="text-[#486A7D] font-semibold">Email</p>
                      <input
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        type="email"
                        placeholder="Email"
                      />
                    </li>
                    <li>
                      <p className="text-[#486A7D] font-semibold">Alamat</p>
                      <input
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        type="text"
                        placeholder="Alamat"
                      />
                    </li>
                    <li>
                      <p className="text-[#486A7D] font-semibold">
                        Tanggal Lahir
                      </p>
                      <input
                        className="w-full p-2 border border-gray-300 text-gray-300 rounded-lg"
                        type="date"
                        placeholder="Tanggal Lahir"
                      />
                    </li>
                    <li>
                      <p className="text-[#486A7D] font-semibold">No. Telpon</p>
                      <input
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        type="text"
                        placeholder="No. Telpon"
                      />
                    </li>
                    <li>
                      <button
                        onClick={() => setSearchParams({ tabs: "profile" })}
                        className="bg-[#2B8862] text-white font-semibold rounded py-2 px-5"
                      >
                        Save
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <ul className="flex flex-col gap-7">
                  <li>
                    <p className="text-[#486A7D] font-semibold">Nama Lengkap</p>
                    <p className="text-[#486A7D]">Raffi Ahmad</p>
                  </li>
                  <li>
                    <p className="text-[#486A7D] font-semibold">Email</p>
                    <p className="text-[#486A7D]">raffiahmad@gmail.com</p>
                  </li>
                  <li>
                    <p className="text-[#486A7D] font-semibold">Alamat</p>
                    <p className="text-[#486A7D]">Jl. Melati anggrek No. 17 Jakarta utara</p>
                  </li>
                  <li>
                    <p className="text-[#486A7D] font-semibold">
                      Tanggal Lahir
                    </p>
                    <p className="text-[#486A7D]">1 Januari 2000</p>
                  </li>
                  <li>
                    <p className="text-[#486A7D] font-semibold">No. Telpon</p>
                    <p className="text-[#486A7D]">08656765425</p>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        setSearchParams({ tabs: "profile", edit: true })
                      }
                      className="bg-[#2B8862] text-white font-semibold rounded py-2 px-5"
                    >
                      Edit Profile
                    </button>
                  </li>
                </ul>
              )}
            </>
          )}
        </main>
      </div>
    </BasicLayout>
  );
};

export default Profile;