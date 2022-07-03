import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../components/layout/basicLayout";

const Home = () => {
  return (
    <BasicLayout>
      <h1 className="mt-14 text-5xl font-medium text-center leading-snug">
        Mengelola Sampah Secara
        <br /> Bertanggung Jawab Bersama Pakan Bumi
      </h1>
      <h2 className="mt-2 text-xl text-almostGray text-center">
        Kirim sampah makananmu dan kumpulkan point untuk ditukarkan <br />
        dengan voucher atau uang tunai
      </h2>

      {/* box div */}
      <div className="flex justify-center mt-10 w-full z-10">
        <div className="w-full max-w-5xl h-44 shadow-2xl rounded-xl flex overflow-hidden bg-white z-10">
          <div className="w-full px-6 py-4">
            <p className="text-darkGreen text-xl font-semibold">
              BUAT PESANANMU DISINI
            </p>
            <div className="flex mt-4 justify-between gap-4">
              <div className="w-full">
                <p className="text-sm text-blackText">Lokasi</p>
                <select className="p-3 mt-2 rounded-lg cursor-pointer bg-white shadow-lg w-full text-sm text-[#666666]">
                  <option value="">Pilih Kota</option>
                  <option value="">Jakarta Pusat</option>
                  <option value="">Jakarta Barat</option>
                  <option value="">Jakarta Utara</option>
                  <option value="">Jakarta Selatan</option>
                </select>
              </div>
              <div className="w-full">
                <p className="text-sm text-blackText">Kategori</p>
                <select className="p-3 mt-2 rounded-lg cursor-pointer bg-white shadow-lg w-full text-sm text-[#666666]">
                  <option value="">Pilih Kategori</option>
                  <option value="">Rumah Tangga</option>
                  <option value="">Mitra/Resto</option>
                </select>
              </div>
              <div className="w-full relative">
                <p className="text-sm text-blackText">Berat Sampah</p>
                <input
                  type="number"
                  placeholder="0 gram"
                  className="p-3 mt-2 rounded-lg bg-white shadow-lg w-full text-sm text-[#666666]"
                />
                <span className="text-xs text-[#929292] absolute left-0 -bottom-6">
                  Min. 250 gram
                </span>
              </div>
            </div>
          </div>
          <Link
            to={
              localStorage.getItem("isLoggedIn") === "true"
                ? "/pesanan"
                : "/login"
            }
          >
            <button className="h-full bg-green-100 hover:bg-green-200 px-10 text-white font-bold text-xl transition">
              PESAN
            </button>
          </Link>
        </div>
      </div>

      {/* full width image */}
      <div className="flex justify-center -mt-20">
        <img src="/main-img.png" alt="sampah" className="w-full z-0" />
      </div>

      {/* h3 title center */}
      <h3 className="text-center text-4xl font-bold text-[#027D56] mt-10">
        Alur Pengolahan Sampah
      </h3>

      {/* divider */}
      <div className="w-full h-px bg-gray-300 mt-10" />
      <div className="flex justify-between -mt-[2px]">
        <div className="h-1 bg-[#256B19] w-16 rounded-full" />
        <div className="h-1 bg-[#256B19] w-16 rounded-full" />
      </div>

      <section className="mt-10 grid grid-cols-6 gap-y-20">
        <div className="flex flex-col justify-center items-center col-span-2 gap-4">
          <h4 className="px-5 py-2 rounded-full text-2xl font-semibold text-blackText shadow-lg">
            Langkah 1
          </h4>
          <img
            src="/main/img1.png"
            alt="Langkah pertama"
            className="w-52 h-52"
          />
          <p className="text-md text-center w-52">
            Pengguna menyiapkan sampah yang akan dikirim dan menimbang berat
            sampah tersebut
          </p>
        </div>
        <div className="flex flex-col justify-center items-center col-span-2 gap-4">
          <h4 className="px-5 py-2 rounded-full text-2xl font-semibold text-blackText shadow-lg">
            Langkah 2
          </h4>
          <img src="/main/img2.png" alt="Langkah kedua" className="w-52 h-52" />
          <p className="text-md text-center w-52">
            Pemesanan penjemputan sampah dilakukan oleh pengguna dengan mengisi
            informasi penjemputan
          </p>
        </div>
        <div className="flex flex-col justify-center items-center col-span-2 gap-4">
          <h4 className="px-5 py-2 rounded-full text-2xl font-semibold text-blackText shadow-lg">
            Langkah 3
          </h4>
          <img src="/main/img3.png" alt="Langkah kedua" className="w-52 h-52" />
          <p className="text-md text-center w-52">
            Driver menerima pesanan dan siap untuk menjemput sampah dan
            mengantar sampah
          </p>
        </div>
        <div className="flex flex-col justify-center items-center col-span-3 gap-4">
          <h4 className="px-5 py-2 rounded-full text-2xl font-semibold text-blackText shadow-lg">
            Langkah 4
          </h4>
          <img src="/main/img4.png" alt="Langkah kedua" className="w-52 h-52" />
          <p className="text-md text-center w-52">
            Sampah akan dipilah lalu diolah oleh Pakan Bumi menjadi pupuk dan
            pakan ternak
          </p>
        </div>
        <div className="flex flex-col justify-center items-center col-span-3 gap-4">
          <h4 className="px-5 py-2 rounded-full text-2xl font-semibold text-blackText shadow-lg">
            Langkah 5
          </h4>
          <img src="/main/img5.png" alt="Langkah kedua" className="w-52 h-52" />
          <p className="text-md text-center w-52">
            Pengguna mendapat point yang bisa ditukarkan dengan voucher atau
            uang tunai
          </p>
        </div>
      </section>

      <section className="flex justify-between mt-20 gap-10 text-[#024731]">
        <div className="w-full">
          <h3 className="text-6xl font-extrabold">Recycling 101</h3>
          <article className="font-medium mt-10">
            Cari tahu bahan umum mana yang dapat didaur ulang dan mana yang
            tidak, plus pelajari tiga aturan sederhana untuk membantu Anda
            mendaur ulang dengan benar.
          </article>
          <Link to="/artikel/recycling-101">
            <button className="bg-[#E8F733] rounded-full px-5 py-2 mt-10 font-bold text-lg transition hover:opacity-80">
              Pelajari Recycling 101
            </button>
          </Link>
        </div>
        <img src="/recycle-main.png" alt="recycle" />
      </section>

      <section className="mt-20 relative">
        <img src="/main-sampah.png" alt="" />
        <div className="top-0 left-0 absolute w-full h-full flex flex-col justify-center items-center text-white gap-3">
          <h3 className="font-semibold text-5xl">#MulaiKurangiSampahMakanan</h3>
          <p>Setor sampah makananmu sekarang dan kumpulkan pointnya</p>
        </div>
      </section>
    </BasicLayout>
  );
};

export default Home;
