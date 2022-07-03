import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import BasicLayout from "../components/layout/basicLayout";

const TukarPoin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [done, setDone] = useState(false);

  return (
    <BasicLayout>
      <div className="flex mt-10 items-center justify-between">
        <p className="max-w-3xl">
          Kamu dapat menukarkan poinmu dengan uang yang akan di transfer ke
          rekening bankmu atau dengan voucher yang telah kami sediakan!{" "}
        </p>
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
                tabs: "transfer",
              });
            }}
            className={`p-2 w-44 text-sm font-semibold rounded ${
              searchParams.get("tabs") !== "voucher"
                ? "bg-[#EAF8F5] text-[#083A50]"
                : "text-[#CACED8]"
            }`}
          >
            Transfer antar bank
          </button>
          <button
            onClick={() => setSearchParams({ tabs: "voucher" })}
            className={`p-2 w-44 text-sm font-semibold rounded ${
              searchParams.get("tabs") === "voucher"
                ? "bg-[#EAF8F5] text-[#083A50]"
                : "text-[#CACED8]"
            }`}
          >
            Voucher
          </button>
        </div>
        <div className="w-[2px] h-60 bg-[#E8EAEE]/40" />
        <main>
          {searchParams.get("tabs") === "voucher" ? (
            <>
              <h1 className="text-[#CACED8] font-semibold text-xl">Voucher</h1>
              {done ? (
                // center a div with a message
                <div className="flex flex-col gap-7 items-center justify-center w-[60vw] h-96">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M80 10C98.5652 10 116.37 17.375 129.497 30.5025C142.625 43.6301 150 61.4348 150 80C150 98.5652 142.625 116.37 129.497 129.497C116.37 142.625 98.5652 150 80 150C61.4348 150 43.6301 142.625 30.5025 129.497C17.375 116.37 10 98.5652 10 80C10 61.4348 17.375 43.6301 30.5025 30.5025C43.6301 17.375 61.4348 10 80 10V10ZM71.28 93.81L55.73 78.25C55.1725 77.6925 54.5107 77.2503 53.7824 76.9486C53.054 76.6469 52.2734 76.4917 51.485 76.4917C50.6966 76.4917 49.916 76.6469 49.1876 76.9486C48.4593 77.2503 47.7975 77.6925 47.24 78.25C46.1142 79.3758 45.4817 80.9028 45.4817 82.495C45.4817 84.0872 46.1142 85.6142 47.24 86.74L67.04 106.54C67.5959 107.1 68.2572 107.545 68.9858 107.848C69.7143 108.152 70.4958 108.308 71.285 108.308C72.0742 108.308 72.8557 108.152 73.5842 107.848C74.3128 107.545 74.9741 107.1 75.53 106.54L116.53 65.53C117.095 64.9748 117.544 64.3133 117.852 63.5836C118.16 62.8539 118.321 62.0705 118.324 61.2785C118.328 60.4864 118.175 59.7015 117.874 58.969C117.573 58.2365 117.129 57.5708 116.57 57.0104C116.01 56.45 115.345 56.006 114.613 55.704C113.88 55.4019 113.096 55.2478 112.304 55.2506C111.512 55.2533 110.728 55.4129 109.998 55.72C109.268 56.0271 108.606 56.4757 108.05 57.04L71.28 93.81Z"
                      fill="#50EF73"
                    />
                  </svg>
                  <h2 className="text-semiBlack text-4xl font-semibold">
                    10000 Poinmu telah ditukar
                  </h2>
                  <p>
                    Kode Voucher :{" "}
                    <strong className="text-semiBlack">
                      1xGratisJemputSampah
                    </strong>
                  </p>
                </div>
              ) : (
                <div className="flex gap-10 mt-10">
                  <div className="border border-gray-400 max-w-sm p-8 h-60 rounded-lg shadow">
                    <h2 className="text-3xl font-bold">100 Poin</h2>
                    <strong className="font-semibold mt-3 text-sm">
                      1 x Gratis ANTAR jemput sampah MAKANAN
                    </strong>
                    <ul className="list-disc list-inside text-xs text-gray-400 mt-5">
                      <li>Berlaku sampai 31 Desember 2022</li>
                      <li>
                        Untuk pemesanan antar jemput sampah makanan di seluruh
                        Indonesia
                      </li>
                    </ul>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setDone(true)}
                        className="px-5 py-2 text-sm font-semibold mt-5 rounded-lg text-white bg-[#2B8862]"
                      >
                        Tukar
                      </button>
                    </div>
                  </div>
                  <div className="border border-gray-400 max-w-sm p-8 h-60 rounded-lg shadow">
                    <h2 className="text-3xl font-bold">200 Poin</h2>
                    <strong className="font-semibold mt-3 text-sm">
                      2 x Gratis ANTAR jemput sampah MAKANAN
                    </strong>
                    <ul className="list-disc list-inside text-xs text-gray-400 mt-5">
                      <li>Berlaku sampai 31 Desember 2022</li>
                      <li>
                        Untuk pemesanan antar jemput sampah makanan di seluruh
                        Indonesia
                      </li>
                    </ul>
                    <div className="flex justify-end">
                      <button
                        onClick={() => setDone(true)}
                        className="px-5 py-2 text-sm font-semibold mt-5 rounded-lg text-white bg-[#2B8862]"
                      >
                        Tukar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <h1 className="text-[#CACED8] font-semibold text-xl">
                Transfer Antar Bank
              </h1>
              {done ? (
                <div className="flex flex-col gap-7 items-center justify-center w-[60vw] h-96">
                  <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M80 10C98.5652 10 116.37 17.375 129.497 30.5025C142.625 43.6301 150 61.4348 150 80C150 98.5652 142.625 116.37 129.497 129.497C116.37 142.625 98.5652 150 80 150C61.4348 150 43.6301 142.625 30.5025 129.497C17.375 116.37 10 98.5652 10 80C10 61.4348 17.375 43.6301 30.5025 30.5025C43.6301 17.375 61.4348 10 80 10V10ZM71.28 93.81L55.73 78.25C55.1725 77.6925 54.5107 77.2503 53.7824 76.9486C53.054 76.6469 52.2734 76.4917 51.485 76.4917C50.6966 76.4917 49.916 76.6469 49.1876 76.9486C48.4593 77.2503 47.7975 77.6925 47.24 78.25C46.1142 79.3758 45.4817 80.9028 45.4817 82.495C45.4817 84.0872 46.1142 85.6142 47.24 86.74L67.04 106.54C67.5959 107.1 68.2572 107.545 68.9858 107.848C69.7143 108.152 70.4958 108.308 71.285 108.308C72.0742 108.308 72.8557 108.152 73.5842 107.848C74.3128 107.545 74.9741 107.1 75.53 106.54L116.53 65.53C117.095 64.9748 117.544 64.3133 117.852 63.5836C118.16 62.8539 118.321 62.0705 118.324 61.2785C118.328 60.4864 118.175 59.7015 117.874 58.969C117.573 58.2365 117.129 57.5708 116.57 57.0104C116.01 56.45 115.345 56.006 114.613 55.704C113.88 55.4019 113.096 55.2478 112.304 55.2506C111.512 55.2533 110.728 55.4129 109.998 55.72C109.268 56.0271 108.606 56.4757 108.05 57.04L71.28 93.81Z"
                      fill="#50EF73"
                    />
                  </svg>
                  <h2 className="text-semiBlack text-4xl font-semibold">
                    10000 Poinmu telah ditukar
                  </h2>
                </div>
              ) : (
                <form className="text-[#486A7D] text-sm flex flex-col gap-3 mt-8">
                  <div className="flex flex-col ">
                    <label>Total Poin Ingin Ditukar</label>
                    <input
                      type="text"
                      className="bg-white border border-[#CACED8] rounded-lg py-2 px-4 w-80"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label>Nama Bank</label>
                    <input
                      type="text"
                      className="bg-white border border-[#CACED8] rounded-lg py-2 px-4 w-80"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label>No. Rekening</label>
                    <input
                      type="text"
                      className="bg-white border border-[#CACED8] rounded-lg py-2 px-4 w-80"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label>Nama Lengkap</label>
                    <input
                      type="text"
                      className="bg-white border border-[#CACED8] rounded-lg py-2 px-4 w-80"
                    />
                  </div>
                  <button
                    onClick={() => setDone(true)}
                    className="bg-[#2B8862] text-white font-semibold rounded w-20 py-2"
                  >
                    Kirim
                  </button>
                </form>
              )}
            </>
          )}
        </main>
      </div>
    </BasicLayout>
  );
};

export default TukarPoin;
