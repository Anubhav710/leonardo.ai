"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdArrowRight } from "react-icons/md";

import { NumBox, SizeBox } from "./Box";
import { useImageContext } from "@/context/imageContext";
import Image from "next/image";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [active, setActive] = useState(1);

  const cradit = useImageContext();

  const handleClick = (index: any) => {
    setActiveIndex(index !== activeIndex && index); // Toggle active state
  };
  const handleClick2 = (index: any) => {
    setActive(index !== active && index); // Toggle active state
  };

  return (
    <aside className="py-5 fixed w-64 flex flex-col h-full ">
      {/* Top Box  */}
      {/* FIRST BOX  */}
      <div className="space-y-4 ">
        <div className="px-5 space-y-2">
          <Image
            height={50}
            width={150}
            src="/images/logo.svg"
            alt=""
            className="mx-auto"
          />
          <div className="gradient-1 w-full h-[1px] " />
        </div>
        {/* SECOUND BOX  */}

        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full gradient-1 flex items-center justify-center text-2xl font-medium">
              G
            </div>
            <h1 className="text-[14px] font-medium">Guest</h1>
          </div>
          <MdArrowRight className="text-white w-10 h-10 rotate-90" />
        </div>
        {/* THIRD BOX  */}

        <div className="flex cursor-pointer  items-center gap-1 w-max mx-auto py-1 px-3 rounded-full border border-gray-600">
          <svg
            viewBox="0 0 17 16"
            focusable="false"
            className="h-7 w-7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 12.0067C5.5 12.4933 5.64667 12.9333 5.92 13.3133C4.13334 13.2 2.5 12.5467 2.5 11.34V10.7533C3.2 11.3 4.23333 11.6667 5.5 11.7867V12.0067ZM5.52665 9.29333C5.51999 9.3 5.52002 9.30665 5.52002 9.31331C5.50669 9.37998 5.5 9.44668 5.5 9.51335V10.7867C3.88667 10.6 2.5 9.96001 2.5 8.84668V8.26001C3.2 8.81334 4.24002 9.18 5.52002 9.29333H5.52665ZM8.12667 6.85335C7.11334 7.16669 6.32 7.67999 5.88 8.31999C4.10667 8.20665 2.5 7.55335 2.5 6.35335V5.89998C3.37333 6.58665 4.77333 6.98665 6.5 6.98665C7.08 6.98665 7.62667 6.94002 8.12667 6.85335ZM10.5 5.89998V6.35335C10.5 6.41335 10.4933 6.46669 10.4867 6.52002C9.95999 6.52002 9.45999 6.56665 8.99333 6.64665C9.59333 6.46665 10.1 6.21332 10.5 5.89998ZM6.5 2C4.5 2 2.5 2.66666 2.5 3.99333C2.5 5.33333 4.5 5.98665 6.5 5.98665C8.5 5.98665 10.5 5.33333 10.5 3.99333C10.5 2.66666 8.5 2 6.5 2ZM10.5 12.5067C8.82667 12.5067 7.4 12.0667 6.5 11.3534V12.0067C6.5 13.3333 8.5 14 10.5 14C12.5 14 14.5 13.3333 14.5 12.0067V11.3534C13.6 12.0667 12.1733 12.5067 10.5 12.5067ZM10.5 7.52002C8.29333 7.52002 6.5 8.41335 6.5 9.51335C6.5 10.6133 8.29333 11.5067 10.5 11.5067C12.7067 11.5067 14.5 10.6133 14.5 9.51335C14.5 8.41335 12.7067 7.52002 10.5 7.52002Z"
              fill="url(#coin-icon-gradient-1-:ra:)"
            ></path>
            <defs>
              <linearGradient
                id="coin-icon-gradient-1-:ra:"
                x1="-2.66"
                y1="2"
                x2="16.0891"
                y2="-0.962706"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FA5560"></stop>
                <stop offset="0.5" stop-color="#B14BF4"></stop>
                <stop offset="1" stop-color="#4D91FF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-sm font-semibold">{cradit.coin}</span>
          <div className="gradient-1 w-max px-3 rounded-full text-sm">
            Manage
          </div>
        </div>
      </div>
      {/* Bottom BOX  */}
      <div className="px-3 py-5">
        <div>
          <h1 className="mb-2">Image Dimensions</h1>
          <div className="flex justify-between gap-2">
            {[1, 2, 3].map((index) => (
              <SizeBox
                key={index}
                index={index}
                size=""
                className={` ${
                  index === 1 ? "w-7 h-7" : index === 2 ? "w-12 h-7" : "w-7 h-9"
                }  mb-1`}
                actives={active}
                onClick={handleClick2}
              />
            ))}
          </div>
        </div>

        <div className="py-5">
          <h1>Number of Images</h1>
          <div className="py-2 flex justify-between">
            {[1, 2, 3, 4].map((index) => (
              <NumBox
                key={index}
                index={index}
                onClick={handleClick}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="px-5   h-full flex items-end">
        <h1 className="">Created by Anubhav Agrawal</h1>
      </div>
    </aside>
  );
};

export default Sidebar;

{
  /* <SizeBox size={"1:1"} className="h-7 w-7 mb-1" />
<SizeBox size={"16:9"} className="h-6 mb-1 w-10" />
<SizeBox size={"9:16"} className="h-10 my-1" /> */
}
