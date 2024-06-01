import Image from "next/image";
import React from "react";

const BgCards = () => {
  return (
    <div className="mt-10">
      <div className="bg-gradient-to-b from-white/20 to-black/10 shadow-lg border border-white/60  p-7 rounded-[30px] backdrop-blur ">
        <div>
          <Image
            height={630}
            width={980}
            alt="bg-image"
            src={
              "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/img-hero-big-1920x1205.jpg"
            }
            className="rounded-2xl border border-white/40"
          />
        </div>
      </div>
    </div>
  );
};

export default BgCards;
