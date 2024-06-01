import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 pb-20 gap-10 justify-between max-w-screen-xl mx-auto">
      {/* left box  */}
      <div className="text-white flex-1 text-center ">
        <h1 className="text-3xl font-medium  text mb-5 ">
          Cultivate Originality
        </h1>{" "}
        <p className="text-center">
          Your imagination, our technology. Generate distinctive art with
          pre-trained AI models or train your own.
        </p>
      </div>
      {/* Middle Box  */}
      <div className="text-white flex-1 md:border-x border-y border-gray-700 md:py-0 md:border-y-0 md:px-5  py-5 text-center ">
        <h1 className="text-3xl font-medium mb-5 text ">Simplified Mastery</h1>{" "}
        <p className="text-center">
          Easy to grasp, rewarding to perfect. Be proficient in producing
          exquisite content quickly and efficiently.
        </p>
      </div>
      {/* Right Box  */}
      <div className="text-white flex-1  text-center ">
        <h1 className="text-3xl font-medium mb-5 text ">
          Turbocharge Innovation
        </h1>{" "}
        <p className="text-center">
          Fast-forward your ideation process. Conceptualise, iterate, and
          experiment at light speed.
        </p>
      </div>
    </div>
  );
};

export default Features;
