"use client";
import { useImageContext } from "@/context/imageContext";
import Image from "next/image";
import React from "react";
import Loader from "./Loader";

const Card = ({
  url,
  height,
  width,
}: {
  url: string;
  height?: any;
  width?: any;
}) => {
  let loader = useImageContext();
  return (
    <div>
      <div className=" rounded-lg h-96 w-96  bg-gray-800 flex justify-center items-center ">
        {loader.loader ? (
          <Loader />
        ) : (
          <div>
            <Image
              src={url}
              height={height}
              width={width}
              alt="image"
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
