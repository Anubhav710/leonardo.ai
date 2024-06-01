import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Box1 from "../ui/Box1";

const CreativeHorizons = () => {
  return (
    <section className=" py-20  ">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold mb-2 text-white ">
          Unveil New Creative Horizons with
        </h1>
        <h1 className="text font-bold text-4xl">Fine-tuned Models</h1>
        <div className=" ">
          <Carousel className="relative">
            <CarouselContent className=" ">
              <CarouselItem className="flex ">
                <Box1 src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Anime_6-300x208.jpg" />
                <Box1 src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Kino_6-300x208.jpg" />
                <Box1 src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/6-300x208.jpg" />
                <Box1
                  className={"hidden md:block"}
                  src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/0-2022-12-02T033131-97-300x208.png"
                />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <Box1 src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/12/LeoDiffXL_6-300x208.jpg" />
              </CarouselItem>
              <CarouselItem className="basis-1/4">
                <Box1 src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/01/RPG_6-300x208.jpg" />
              </CarouselItem>
            </CarouselContent>

            <CarouselNext className="absolute bg-black text-white h-12 w-12 border border-gray-700/60  -top-6 right-4 hover:bg-black hover:text-white" />
            <CarouselPrevious className="absolute  bg-black text-white h-12 w-12 border hover:bg-black hover:text-white border-gray-700/60  -top-6 left-[75%] md:left-[85%] lg:left-[88%]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CreativeHorizons;
