import Image from "next/image";
import React from "react";

const Box1 = ({ className, src }: { className?: any; src: string }) => {
  return (
    <div className={` ${className}  max-w-lg  text-white p-4 text-whit`}>
      <div className="">
        <Image
          height={500}
          width={500}
          src={src}
          alt="photo"
          className="object-contain mb-3 rounded-xl"
        />
        <h1 className="text-[14px] font-medium text-white text-lg">
          Leonardo Diffusion
        </h1>
        <p className="text-[12px] text-gray-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minus?
        </p>
      </div>
    </div>
  );
};

export default Box1;
