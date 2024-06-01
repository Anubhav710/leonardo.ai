import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MainWindow from "./components/MainWindow";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="flex w-full  relative">
      <div className=" bg-gradient-to-tr fixed top-0 bottom-0   hidden md:block from-[#06080E] to-[#0D111B] h-screen w-64 overflow-y-auto">
        <Sidebar />
      </div>
      <div className=" w-full    ">
        <div className="md:pl-60 ">
          <MainWindow />
        </div>
      </div>
    </div>
  );
};

export default page;
