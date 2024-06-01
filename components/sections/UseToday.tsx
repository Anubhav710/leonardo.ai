import React from "react";
import Slider from "../ui/Slider";

const UseToday = () => {
  return (
    <div className=" mb-20 max-w-screen-xl px-5 text-white flex flex-col items-center gap-5 mt-5 mx-auto ">
      <h1 className="md:text-5xl font-bold text-[40px]">
        Use Leonardo today for
      </h1>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default UseToday;
