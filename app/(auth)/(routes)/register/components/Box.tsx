import React from "react";
import { ImAppleinc } from "react-icons/im";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";

const Box = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <div className=" py-3    bg-[#3c3c3c81] cursor-pointer rounded-lg hover:bg-[#3C3C3C] pl-4">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 ">{icon}</div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Box;
