import { sliderItem } from "@/constants";
import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text ">
        <div className=" flex overflow-hidden  ">
          {sliderItem.slice(0, 1).map((item) => (
            <div className="" key={item.name}>
              <h1 className="text-center mb-4">{item.name}</h1>
              <Image
                height={1000}
                width={1000}
                src={item.img}
                alt=""
                className="object-cover h-full w-full object-center"
              />
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Slider;
