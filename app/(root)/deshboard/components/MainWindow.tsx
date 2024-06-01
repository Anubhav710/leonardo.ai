import Button from "@/components/shared/Button";
import React from "react";
import AiBox from "./AiBox";
import Slider from "@/components/ui/Slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import Gallery from "./Gallery";

const MainWindow = () => {
  return (
    <div className="px-9 min-h-screen ">
      {/* Top Box  */}
      <div className="flex justify-between items-center py-5">
        <h1 className=" font-semibold text-2xl">
          <span className="text">Get Started</span> Here
        </h1>
        <Button className="py-2 " route="/image">
          Create New Image
        </Button>
      </div>
      <div className="grid  grid-cols-3 md:grid-cols-1 lg:grid-cols-5 gap-4 cursor-pointer">
        <AiBox />
      </div>
      <div>
        <h1 className="text-2xl py-10">
          <span className="text font-medium">Community</span> Creations
        </h1>
        <div className="pb-7  flex flex-col gap-4 ">
          <Button>Phography</Button>
          <div className="w-full h-[1px] bg-gray-800" />
        </div>
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
