import React from "react";
import Button from "../shared/Button";
import Image from "next/image";

export const Start = () => {
  return (
    <div className="bg-gradient-to-tr  w-full    from-[#212855] via-[#161B35] to-[#0C1018] ">
      <div className="max-w-screen-xl flex-col md:flex-row  mx-auto flex w-full ">
        {/* left box  */}
        <div className="flex-1   text-white py-7">
          <div className="wrapper px-5">
            <div className="text-4xl font-bold my-5 text-white max-w-lg">
              Create your next <span className="text">artwork</span> , with the
              power of Leonardo Ai
            </div>
            <div className="w-max">
              <Button>Start using Leonardo</Button>
              <p className="text-xs mt-2 text-center ">No credit card needed</p>
            </div>
          </div>
        </div>
        {/* right box  */}
        <div className="flex-1   ">
          <div className="px-5 w-full h-full ">
            <Image
              height={500}
              width={500}
              src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/1-63-1024x641.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
