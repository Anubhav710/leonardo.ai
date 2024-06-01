import React from "react";

const Testimonials = () => {
  return (
    <section className="text-white  max-w-screen-xl py-20 px-5 mx-auto">
      {/* TOP BOX  */}
      <div className="">
        <h1 className="text-4xl font-bold mb-5 max  text-center">
          A community of over <span className="text"> 4 million</span> is
          waiting for you
        </h1>
        <p className="text-center text-[20px]">
          Leonardo &#39;s power extends beyond our revolutionary tools — we are
          anchored in one of the largest and most supportive AI communities
          worldwide, and we&#39;re deeply committed to it.
        </p>
      </div>
      {/* BOTTOM BOX  */}
      <div className="py-10 flex gap-5 flex-col md:flex-row ">
        <div className="max-w-lg text-center space-y-5 ">
          <h1 className="text-[20px] font-medium ">
            &#34;Leonardo gave me a way of expressing myself in a completely new
            and different way. Without AI I was only a consumer. Now I can
            create.&#34;
          </h1>{" "}
          <div className="flex justify-center gap-2">
            <div className="h-5 w-5 rounded-full bg-red-400" />
            <h5>Malakai030</h5>
          </div>
        </div>
        <div className="max-w-lg text-center space-y-5 md:border-x border-y py-5 md:border-y-0 md:py-0  border-gray-600 px-5 ">
          <h1 className="text-[20px] font-medium ">
            &#34;Leonardo gave me a way of expressing myself in a completely new
            and different way. Without AI I was only a consumer. Now I can
            create.&#34;
          </h1>{" "}
          <div className="flex justify-center gap-2">
            <div className="h-5 w-5 rounded-full bg-red-400" />
            <h5>Malakai030</h5>
          </div>
        </div>
        <div className="max-w-lg text-center space-y-5">
          <h1 className="text-[20px] font-medium ">
            &#34;Leonardo gave me a way of expressing myself in a completely new
            and different way. Without AI I was only a consumer. Now I can
            create.&#34;
          </h1>{" "}
          <div className="flex justify-center gap-2">
            <div className="h-5 w-5 rounded-full bg-red-400" />
            <h5>Malakai030</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
