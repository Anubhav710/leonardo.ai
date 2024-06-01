"use client";
import { useImageContext } from "@/context/imageContext";
import React, { useContext, useState } from "react";

export const NumBox = ({
  index,
  onClick,
  activeIndex,
}: {
  index: any;
  onClick: any;
  activeIndex: any;
}) => {
  const isActive = index === activeIndex; // Check if this box is active

  const setNumber = useImageContext();

  const handleClick = () => {
    setNumber.setImageNum(index);
    onClick(index);
  }; // Handle click event

  return (
    <div
      className={`h-9 w-12 cursor-pointer flex justify-center items-center rounded-md border ${
        isActive ? "border-violet-600" : "border-gray-600"
      } bg-[#101622]`}
      onClick={handleClick} // Bind click handler
    >
      <h1>{index}</h1>
    </div>
  );
};

export const SizeBox = ({
  size,
  className,
  index,
  actives,
  onClick,
}: {
  className?: string;
  size: string;
  index: number;
  actives: any;
  onClick: any;
}) => {
  const isActive = index === actives;
  const handleClick = () => {
    if (index === 1) {
      sizes.setDimention({
        width: 512,
        height: 512,
      });
    } else if (index === 2) {
      sizes.setDimention({
        width: 1024,
        height: 576,
      });
    } else if (index === 3) {
      sizes.setDimention({
        width: 576,
        height: 1024,
      });
    }

    onClick(index);
  };

  const sizes = useImageContext();

  if (index === 1) {
    size = `1:1`;
  } else if (index === 2) {
    size = "16:9";
  } else if (index === 3) {
    size = "9:16";
  }

  return (
    <div
      className={`h-16 w-16 gap-1 rounded-md cursor-pointer border p-9 ${
        isActive ? "border-violet-600" : "border-gray-600"
      }  bg-[#101422] flex justify-center items-center  flex-col `}
      onClick={handleClick}
    >
      <div>
        <div className={` ${className} border border-white`} />
        <h1 className="text-sm text-center">{size}</h1>
      </div>
    </div>
  );
};
