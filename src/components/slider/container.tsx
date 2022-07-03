import React from "react";
import { Link } from "react-router-dom";
import { ArrowIconSliderSmall } from "../svgs";

type container = {
  image: string;
  title: string;
  time: string;
  timeRead: number;
  description: string;
  link: string;
};

const Container = ({
  image,
  title,
  description,
  time,
  link,
  timeRead,
}: container) => {
  return (
    <div className="border p-5 shadow rounded-xl">
      <img src={image} alt="slider" className="w-full" />
      <p className="mt-2 text-sm font-medium text-[#6E6E6E]">{time}</p>
      <h3 className="font-bold text-[#313131] text-xl">{title}</h3>
      <p className="mt-2 text-sm font-medium text-[#767676] line-clamp-3 h-16">
        {description}
      </p>
      <div className="flex items-center justify-between mt-5">
        <p className="text-[#6E6E6E]">{timeRead} Min Read</p>
        <Link
          to={link}
          className="text-sm items-center font-bold flex text-[#313131]"
        >
          <span>Read Full</span>
          <ArrowIconSliderSmall />
        </Link>
      </div>
    </div>
  );
};

export default Container;
