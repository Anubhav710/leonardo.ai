import Image from "next/image";
import React from "react";

const BlurCard = ({ src, className }: { src: string; className?: string }) => {
  return (
    <div className="bg-gradient-to-b  overflow-hidden  h-[265px] relative w-[300px]     rounded-[30px] backdrop-blur ">
      <Image
        src={src}
        fill
        alt="image"
        className={`object-cover ${className} `}
      />
    </div>
  );
};

export default BlurCard;
