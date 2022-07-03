import React, { Component } from "react";
import Slider from "react-slick";
import { ArrowIconSlider } from "../svgs";
import Container from "./container";

export class SliderOne extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold text-semiBlack">
            Bahaya Sampah Makanan
          </h1>
          <div className="flex gap-2">
            <button
              className="hover:opacity-80 transition"
              onClick={this.previous}
            >
              <ArrowIconSlider.Left />
            </button>
            <button className="hover:opacity-80 transition" onClick={this.next}>
              <ArrowIconSlider.Right />
            </button>
          </div>
        </div>
        <div className="mt-1 mb-5 border-t flex items-center border-t-[#D6D6D6] w-full">
          <div className="w-10 h-1 -m-1 bg-[#313131] rounded-full" />
        </div>
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div className="px-3">
            <Container
              image="/sliderOne/first.png"
              title="Food Waste dan Pandemi"
              description="Peningkatan pembelian makanan tidak selalu diikuti dengan peningkatan sampah makanan, non-perishable food adalah jawabannya."
              time="1 Month Ago"
              link="/artikel/food-waste"
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderOne/second.png"
              title="#Darurat Food Waste"
              description="Bagaimana cara agar tidak mudah membuang-buang makanan? Pertama kita perlu tahu apa alasan kita mudah membuang makanan."
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderOne/third.png"
              title="Peningkatan Sampah Makanan"
              description="Sobat pernah terpikir terkait peningkatan sampah makanan dari sudut pandang penjual? Yuk, simak tulisan berikut!"
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderOne/fourth.png"
              title="Perjalanan Food Waste"
              description="Food Waste atau limbah makanan dapat digambarkan sebagai masalah “farm-to-fork”."
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderOne/fifth.png"
              title="Perilaku Zero Food Waste"
              description="Diperlukan edukasi mengenai food waste dan pembiasaan perilaku yang dapat mendukung zero food waste dapat ditanamkan mulai dari usia dini."
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderOne/sixth.png"
              title="Fenomena Food Waste"
              description="The Economist Intelligence Unit (EIU) merilis data bahwa Indonesia dinyatakan menduduki peringkat kedua setelah Arab Saudi, sebagai  penghasil food waste terbesar di dunia."
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
        </Slider>
      </>
    );
  }
}

export default SliderOne;
