import Link from "next/link";
import React from "react";
import { BiRightArrow, BiRightArrowAlt } from "react-icons/bi";
import BgCards from "../shared/BgCards";
import BackCards from "../shared/backCards";

const Hero = () => {
  return (
    <div className="lg:h-[140vh] py-4 md:py-0  text-white relative overflow-hidden  ">
      <div className="h-[52%]  w-full absolute">
        <BackCards />
      </div>
      <div className="relative z-50 flex pt-24 flex-col max-w-screen-2xl  mx-auto px-5  items-center">
        <h1 className="md:text-[58px] font-bold  text-[40px]  ">
          <span className="text">Creativity</span>, Unleashed.
        </h1>
        <p className=" text-center  text-[24px] py-4 max-w-[600px]">
          Leverage generative AI with a unique suite of tools to convey your
          ideas to the world.
        </p>
        <div className="flex gap-9 pt-4">
          <Link
            href={"/register"}
            className="bg-gradient-to-t from-white/25 to-white/35 hover:shadow-3xl py-2 rounded-full px-9 border border-white/50 shadow-lg"
          >
            <span className="font-medium">Get Started</span>
          </Link>
          <Link href={"/register"} className="text-lg flex items-center ">
            <span className=""> Login As Guest</span>

            <BiRightArrowAlt className="h-7 w-7" />
          </Link>
        </div>
        <div>
          <BgCards />
        </div>
      </div>
    </div>
  );
};

export default Hero;
