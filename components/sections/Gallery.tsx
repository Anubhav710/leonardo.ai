import React from "react";
import Gal from "../shared/Gallery";
const Gallery = () => {
  return (
    <div className="py-5  h-[120vh]   overflow-hidden ">
      <div>
        <h1 className="text-center font-bold text-white text-4xl">
          <span className="text">Platform </span>Gallery 🎨
        </h1>
      </div>
      <div className="gallery mt-5  ">
        <Gal />
      </div>
    </div>
  );
};

export default Gallery;
