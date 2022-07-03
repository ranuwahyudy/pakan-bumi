import React, { Component } from "react";
import Slider from "react-slick";
import { ArrowIconSlider } from "../svgs";
import Container from "./container";

export class SliderTwo extends Component {
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
            Pengolahan Sampah Makanan
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
              image="/sliderTwo/first.png"
              title="Pengolahan sampah kering"
              description="Peningkatan pembelian makanan tidak selalu diikuti dengan peningkatan sampah makanan, non-perishable food adalah jawabannya."
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderTwo/second.png"
              title="Inovasi Pengolahan Food Waste"
              description="Pengolahan limbah food waste di Indonesia selalu berujung ke dalam landfill dimana sampah-sampah tersebut dikumpulkan menjadi satu. "
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderTwo/third.png"
              title="Food Waste di Norwegia"
              description="Pemerintah Norwegia di tahun 2017 membuat kesepakatan dengan industri makanan di Norwegia untuk mengurangi food waste sebesar 50% per tahun."
              time="1 Month Ago"
              link=""
              timeRead={2}
            />
          </div>
          <div className="px-3">
            <Container
              image="/sliderTwo/fourth.png"
              title="Metode Kompos Takakura"
              description="Ketika mendengar kata ‘composting’ apa yang ada di benak kita pertama kali? Rumit? Sampah? Bau kurang sedap? Pupuk?”."
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

export default SliderTwo;
