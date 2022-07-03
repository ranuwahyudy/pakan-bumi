import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../components/layout/basicLayout";

const Pesan = () => {
  const navigate = useNavigate();
  const [redeem, setRedeem] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <BasicLayout>
      <div className="mt-10 w-full bg-white shadow-xl rounded-xl py-10 px-20">
        <h1 className="text-4xl font-semibold text-semiBlack text-center mt-5">
          Konfirmasi Pesananmu
        </h1>
        <p className="text-center text-lg text-semiBlack mt-3">
          Pastikan data yang tertera sesuai
        </p>
        <div className="flex justify-between gap-8 h-[450px] mt-10">
          <div className="w-full">
            <h2 className="font-semibold text-xl">Informasi umum</h2>
            <ul className="w-full flex flex-col gap-5 mt-5">
              <li className="flex justify-between">
                <p className="font-medium text-[#696E70]">Lokasi</p>
                <p className="font-medium text-semiBlack">Jakarta Pusat</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-[#696E70]">Kategori</p>
                <p className="font-medium text-semiBlack">Rumah Tangga</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-[#696E70]">Berat Sampah</p>
                <p className="font-medium text-semiBlack">1000 gram</p>
              </li>
            </ul>
            <div className="w-full border border-b-[#B3B3B3] my-10" />
            <h2 className="font-semibold text-xl">Data Diri</h2>
            <ul className="w-full flex flex-col gap-5 mt-5">
              <li className="flex justify-between">
                <p className="font-medium text-[#696E70]">Raffi Ahmad</p>
                <p className="font-medium text-semiBlack">Jakarta Pusat</p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-[#696E70]">Alamat</p>
                <p className="font-medium text-semiBlack">
                  Jl. Melati anggrek No. 17 Jakarta utara
                </p>
              </li>
              <li className="flex justify-between">
                <p className="font-medium text-[#696E70]">No. Telp.</p>
                <p className="font-medium text-semiBlack">086567654253</p>
              </li>
            </ul>
          </div>
          <div className="border border-l-[#6C6464] h-full" />
          <div className="w-full flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-xl">Input kode voucher</h2>
              <div className="flex gap-2 items-center mt-3">
                <input
                  type="text"
                  className="w-full border p-3 border-[#BDBDBD] rounded"
                  placeholder="Masukkan kode voucher"
                />
                <button
                  onClick={() => setRedeem(true)}
                  className="py-2 px-4 text-[#21941E] font-bold"
                >
                  Redeem
                </button>
              </div>
              <p className="font-semibold mt-1 text-[#21941E]">
                {redeem ? "Selamat anda mendapat gratis ongkir!" : ""}
              </p>
            </div>
            <div>
              <div className="w-full shadow-xl p-5 text-semiBlack">
                <strong>Total</strong>
                <div className="flex justify-between items-center mt-1">
                  <p className="">Ongkos Kirim</p>
                  <p className="font-semibold">
                    {redeem ? "GRATIS!" : "Rp. 10.000"}
                  </p>
                </div>
                <p className="text-[#223A5F] text-sm mt-2">
                  *Driver kami hanya menerima cash
                </p>
              </div>
              <Link to="/pesanan/terkonfirmasi">
                <button
                  onClick={() => {
                    localStorage.setItem("pesanan", "terkonfirmasi");
                  }}
                  className="w-full py-3 mt-5 bg-[#1D70EA] font-semibold text-white hover:opacity-80 transition rounded-lg"
                >
                  Konfirmasi
                </button>
              </Link>
              <Link to="/">
                <button className="w-full py-3 mt-2 bg-[#F2202D]/60 font-semibold text-white hover:opacity-80 transition rounded-lg">
                  Batal
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Pesan;
