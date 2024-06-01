import React from "react";

const Toolkit = () => {
  return (
    <div className="py-5 ">
      <h2 className="text-4xl font-bold text-center text-white ">
        <span className="text"> Leonardo&#39;s </span> Toolkit <span> 🛠️</span>
      </h2>
      <div className="conatiner text-white px-10 mt-10">
        {/* top bar  */}
        <div className=" mb-5  w-full">
          <h1 className="text-lg font-medium  w-max px-3">
            Image Generation
            <div className="gradient-1 w-full h-[2px] " />
          </h1>

          <div className="bg-gray-500 w-full h-[1px] " />
        </div>
        {/* bottom bar */}
        <div className="flex items-center flex-col space-y-10 md:flex-row px-3 ">
          {/* Left bar  */}
          <div className="flex-1  ">
            <div>
              <p className="text font-medium ">Image Generation</p>
              <h1 className="text-2xl font-medium mb-3">
                Envision The Extraordinary
              </h1>
            </div>
            <div>
              <p className="mb-3">
                Take creativity a step further with the transformative power of
                our Image Generation tool. It not just about bringing your
                concepts to life — redefine the impossible. From beginners to
                professionals, we offer a spectrum of settings that can be
                intuitively tailored to your needs.
              </p>
              <p>
                Discover an unprecedented fusion of simplicity and power,
                designed to cater to creative minds at all levels.
              </p>
            </div>
          </div>
          {/* Right bar  */}
          <div className="flex-1 px-3 rounded-lg  ">
            <video
              autoPlay
              muted
              loop
              src="/videos/Generation-Tool-min.mp4"
              className="rounded-lg"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolkit;
