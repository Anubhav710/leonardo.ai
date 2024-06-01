import React from "react";

import MainWindow from "../deshboard/components/MainWindow";
import Sidebar from "./components/Sidebar";
import Input from "./components/Input";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="flex w-full min-h-screen relative">
      <div className=" bg-gradient-to-tr fixed top-0 bottom-0   hidden md:block from-[#06080E] to-[#0D111B] h-screen w-64 overflow-y-auto">
        <Sidebar />
      </div>
      <div className=" w-full  ">
        <div className="md:pl-[274px] pr-5    ">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default page;
