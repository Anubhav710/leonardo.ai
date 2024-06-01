"use client";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/shared/Navbar";
import React, { useEffect } from "react";
import Features from "@/components/sections/Features";
import UseToday from "@/components/sections/UseToday";
import Toolkit from "@/components/sections/Toolkit";
import CreativeHorizons from "@/components/sections/CreativeHorizons";
import Gallery from "@/components/sections/Gallery";

import Testimonials from "@/components/sections/Testimonials";
import { Start } from "@/components/sections/Start";
import { ImageProvider } from "@/context/imageContext";
import { resolve } from "path";

const HomePage = () => {
  return (
    <main className="min-h-screen w-full bg-[#09040B] ">
      <div className=" min-h-screen  relative">
        <Navbar />
        <Hero />
        <div className=" lg:mt-2 md:mt-20">
          <Features />
          <UseToday />

          <div className="max-w-screen-xl mx-auto px-5 bg-[#09040B]">
            <Toolkit />
            <CreativeHorizons />
            <Gallery />
          </div>
          {/* <Discord /> */}
          <Testimonials />
          <Start />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
