import React from "react";
import BasicLayout from "../components/layout/basicLayout";
import { Link } from "react-router-dom";
import { ArrowIconTentang } from "../components/svgs";

const TentangKami = () => {
  return (
    <BasicLayout>
      <section className="w-full flex justify-center items-center my-20 relative">
        <img
          src="/tentang-kami/main-tentang.png"
          alt=""
          className="max-w-6xl"
        />
        <h1 className="text-5xl absolute text-center max-w-4xl leading-relaxed text-semiBlack">
          “Kami mengolah sampah makanan menjadi{" "}
          <span className="font-semibold bg-green-200 text-white">
            pupuk dan pakan ternak
          </span>{" "}
          secara bertanggung jawab”
        </h1>
      </section>
      <section className="flex w-full text-semiBlack">
        <div className="w-4/6">
          <h2 className="font-bold text-3xl w-3/5 leading-relaxed mt-5">
            Penggunaan pupuk hasil dari pengolahan sampah makanan
          </h2>
          <article className="text-[#4B4B4B] mt-20 text-2xl">
            Kami berkomitmen untuk menciptakan lingkungan terbarukan yang
            terbebas polusi dan pencemaran lingkungan dengan nmengolah sampah
            makanan menjadi hal yang bermanfaat.
          </article>
          <div className="flex gap-5 mt-24 items-center">
            <img src="/tentang-kami/pupuk-tentang.png" alt="pupuk" />
            <div>
              <strong className="text-4xl">50Kg+</strong>
              <p className="text-lg mt-5 font-medium">
                Sampah makanan telah diolah
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="flex gap-5 items-center">
            <div className="relative flex items-center justify-center w-px h-32 bg-semiBlack">
              <div className="w-4 h-4 bg-white border border-semiBlack rounded-full absolute"></div>
            </div>
            <p className="text-sm text-[#4B4B4B] w-4/6">
              Proses pengolahan sampah makanan memiliki beberapa tahapan yang
              panjang. Bersama kami, sampah makanan anda akan menjadi barang
              komoditas yang berkelajutan
            </p>
          </div>
          <img
            src="/tentang-kami/foto2.png"
            alt="Foto berkebun"
            className="mt-10"
          />
          <p className="mt-10 font-semibold text-2xl">
            Baca artikel kami tentang bagaimana pengolahan sampah makanan secara
            mandiri
          </p>
          <Link
            to="/artikel"
            className="mt-4 gap-4 flex items-center transition hover:opacity-90"
          >
            <span className="font-semibold">Lihat artikel</span>
            <div className="h-px w-60 bg-semiBlack" />
            <ArrowIconTentang />
          </Link>
        </div>
      </section>
    </BasicLayout>
  );
};

export default TentangKami;
