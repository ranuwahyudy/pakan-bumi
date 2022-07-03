import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BasicLayout from "../../components/layout/basicLayout";
import { TerkonfirmasiIcon } from "../../components/svgs";

const Terkonfirmasi = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isPesanan = localStorage.getItem("pesanan");
    if (!isPesanan) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <BasicLayout>
      <div className="w-full h-[70vh] flex flex-col justify-center items-center gap-5 text-semiBlack">
        <TerkonfirmasiIcon />
        <h1 className="font-semibold text-3xl">Pesanan Terkonfirmasi</h1>
        <p>Receipt #JSH930438KL</p>
        <p className="text-sm text-[#5C5C5C] text-center">
          Terima kasih telah menyetorkan sampah, anda akan mendapatkan{" "}
          <b>20 poin</b>.
          <br />
          Driver kami akan menghubungi anda untuk penjemputan sampah makanan,
          <br />
          mohon persiapkan sampah makanan anda.
        </p>
        <Link
          to="/"
          className="py-2 px-10 mt-5 text-white bg-green-100 hover:bg-green-200 transition rounded-md font-bold"
        >
          <button
            onClick={() => {
              localStorage.removeItem("pesanan");
            }}
          >
            Kembali ke home
          </button>
        </Link>
      </div>
    </BasicLayout>
  );
};

export default Terkonfirmasi;
