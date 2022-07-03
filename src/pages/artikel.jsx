import React from "react";
import BasicLayout from "../components/layout/basicLayout";
import SliderOne from "../components/slider/sliderOne";
import SliderTwo from "../components/slider/sliderTwo";

const Artikel = () => {
  return (
    <BasicLayout>
      <section className="mt-10">
        <SliderOne />
      </section>
      <section className="mt-14">
        <SliderTwo />
      </section>
    </BasicLayout>
  );
};

export default Artikel;
