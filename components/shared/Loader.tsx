import Image from "next/image";
import { MotionDiv } from "@/lib/motion";
import React from "react";

const Loading = async () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div>
        <MotionDiv
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          style={{
            width: 150,
            height: 150,
            borderRadius: 30,
          }}
          className=" bg-gradient-to-tr from-red-500 via-black to-blue-500 backdrop-blur-xl   "
        />
      </div>
      <div className="absolute">
        <Image
          src={"https://app.leonardo.ai/img/leonardo-logo.png"}
          height={120}
          width={120}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Loading;
