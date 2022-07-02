import React from "react";
import { Link } from "react-router-dom";
import BasicLayout from "../../components/layout/basicLayout";
import { ArticleShareIcon, BreadcrumbIcon } from "../../components/svgs";

const Recycling101 = () => {
  return (
    <BasicLayout>
      <div className="flex gap-2 items-center text-[#6D6D6D] font-semibold mt-10">
        <Link to="/artikel">Artikel</Link>
        <BreadcrumbIcon />
        <Link to="/artikel/recycling-101">Pengolahan Sampah Makanan</Link>
      </div>
      <img
        src="/recycle.png"
        alt="Ilustrasi Food Waste"
        className="w-full mt-5"
      />
      <h1 className="font-medium text-3xl mt-10">Recycling 101</h1>
      <div className="mt-1 mb-5 border-t flex items-center border-t-[#D6D6D6] w-full">
        <div className="w-10 h-1 -m-1 bg-[#313131] rounded-full" />
      </div>
      <article className="font-light">
        Hingga saat ini, persoalan mengenai pengolahan, pencegahan, dan
        pengurangan sampah makanan masih terus menerus digalakkan oleh berbagai
        pihak. Sebab, sampah makanan merupakan masalah multi-sektor yang
        dampaknya dapat meliputi bidang ekonomi, lingkungan, dan sosial. FAO
        mencatat sekitar 1.3 miliar ton sampah makanan diproduksi secara global.
        Total persenan tertinggi dipegang oleh sayur dan buah-buahan, yakni
        sebesar 45%, sebagai makanan yang paling banyak terbuang. Bila persoalan
        sampah makanan tidak segera diatasi, maka kita akan terus dihantui oleh
        berbagai masalah seperti bertambahnya jejak karbon, perubahan iklim,
        kasus kelaparan yang tidak ada ujungnya, serta malnutrisi yang semakin
        parah.
        <br />
        <br /> Terjadinya Pandemi Covid-19 selama dua tahun ini, nyatanya
        menambah bagian cerita dari persoalan sampah makanan. Tentunya, hal
        tersebut tidak dapat dipisahkan dari kebijakan-kebijakan yang tercipta
        akibat pandemi, yang salah satu tujuannya adalah mencegah perluasan
        penyebaran virus berbahaya ini. Misalnya, ada kebijakan pembatasan skala
        lokal dan nasional yang dampaknya mengarah ke berbagai hal, seperti
        gangguan alur siklus pasok pangan, penutupan sebagian besar ruang
        publik, transformasi kegiatan offline menjadi online, dan sebagainya.
        Lalu apa sih hubungan Pandemi Covid-19 dengan sampah makanan?
        <br /> <br /> Terdapat dua pendapat dari para ahli terkait produksi
        sampah makanan selama Pandemi Covid-19 berlangsung, yakni (1) ketika
        terjadi krisis, akan ada kecenderungan untuk ‘menabung’ dibandingkan
        ‘membuang’ makanan yang mengarah kepada pengurangan sampah makanan, dan
        (2) gangguan yang terjadi akibat pandemi seperti lockdown, keterbatasan
        penyimpanan (storage limitations), dan penimbunan (stockpiling),
        ditambah dengan kurangnya keterampilan memasak dan manajemen bahan
        makanan serta tindakan panic buying, dapat meningkatkan jumlah produksi
        sampah makanan selama pandemi berlangsung.
      </article>
      <div className="flex items-center text-lg gap-2 mt-16">
        <p>Bagikan: </p>
        <button className="hover:opacity-80 transition">
          <ArticleShareIcon.Facebook />
        </button>
        <button className="hover:opacity-80 transition">
          <ArticleShareIcon.Twitter />
        </button>
      </div>
    </BasicLayout>
  );
};

export default Recycling101;
