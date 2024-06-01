import Link from "next/link";
import React from "react";

const AiBox = () => {
  return (
    <Link href={"/image"}>
      <div className=" md:gap-4  flex flex-col md:flex-row items-center   h-[14vh]       bg-gradient-to-b w-full rounded-lg  from-black to-gray-800   ">
        {/* SVG  */}
        <div className="relative  md:flex-[1.5] h-full flex items-center justify-center  ">
          <svg
            viewBox="0 0 110 110"
            focusable="false"
            className="object-cover h-24 w-24  relative z-40 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_5068_37210_:r1f:)">
              <rect
                x="13"
                y="13"
                width="80"
                height="80"
                rx="40"
                fill="#070A0F"
              ></rect>
              <rect
                x="13.5"
                y="13.5"
                width="79"
                height="79"
                rx="39.5"
                stroke="#E0549C"
                stroke-opacity="0.5"
              ></rect>
              <path
                d="M75.0519 44.0408L72.4571 62.5966C72.1176 64.9601 71.1941 66.6381 69.7388 67.5961C69.2349 67.8556 68.6837 67.5941 68.6837 67.0687V48.4913C68.6837 42.8495 65.3147 39.4805 59.6729 39.4805C59.6729 39.4805 39.9688 39.4805 39.3201 39.4805C38.6714 39.4805 38.6562 38.8964 38.7016 38.6369C39.0433 36.5912 39.8521 35.0775 41.1063 34.1326C42.4189 33.1443 44.1921 32.8007 46.387 33.11L69.2243 36.3103C71.4235 36.6217 73.0407 37.4457 74.0311 38.7604C75.0193 40.073 75.3633 41.8503 75.0519 44.0408ZM65.4401 48.4892V67.2329C65.4401 71.0776 63.5177 73 59.6729 73H36.6041C32.7594 73 30.837 71.0776 30.837 67.2329V48.4892C30.837 44.6444 32.7594 42.722 36.6041 42.722H59.6729C63.5177 42.722 65.4401 44.6422 65.4401 48.4892ZM34.0785 48.4892V64.0109L37.1772 60.9119C37.9124 60.1551 39.145 60.1551 39.9019 60.9119L41.6966 62.7069C42.0642 63.0745 42.6913 63.0745 43.0589 62.7069L52.5519 53.2142C53.2871 52.4789 54.5197 52.4789 55.2766 53.2142L62.1964 60.1512V48.4892C62.1964 46.437 61.7251 45.9656 59.6729 45.9656H36.6041C34.5498 45.9656 34.0785 46.437 34.0785 48.4892ZM40.57 54.6195C41.7615 54.6195 42.7282 53.6507 42.7282 52.4571C42.7282 51.2634 41.7615 50.2947 40.57 50.2947H40.5528C39.3613 50.2947 38.4033 51.2634 38.4033 52.4571C38.4033 53.6507 39.3785 54.6195 40.57 54.6195Z"
                fill="url(#paint0_linear_5068_37210_:r1f:)"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_d_5068_37210_:r1f:"
                x="0"
                y="0"
                width="110"
                height="110"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset dx="2" dy="2"></feOffset>
                <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.878431 0 0 0 0 0.329412 0 0 0 0 0.611765 0 0 0 0.3 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_5068_37210"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_5068_37210"
                  result="shape"
                ></feBlend>
              </filter>
              <linearGradient
                id="paint0_linear_5068_37210_:r1f:"
                x1="30.8151"
                y1="34.2254"
                x2="79.2695"
                y2="35.9843"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0001" stop-color="#FF414E"></stop>
                <stop offset="0.499028" stop-color="#BE6AF5"></stop>
                <stop offset="1" stop-color="#4D91FF"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-0 bg-black/50 h-full w-full z-20 hidden md:block" />
          <div className=" h-full w-full  absolute z-10 top-0  hidden  md:block ">
            <video
              src="/videos/v1.webm"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover  md:block "
            ></video>
          </div>
        </div>
        <div className="md:flex-[2] hidden gap-1 h-full md:flex flex-col justify-center">
          <h1 className="">Image Generation</h1>
          <p className="text-xs hidden md:block text-gray-400">
            Generate art, illustrations and more with prompts.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AiBox;

{
  /* <div className="flex-1  relative h-36 bg-red-100 flex justify-center items-center ">
        <div className="bg-black/50 w-full overflow-hidden h-full absolute z-10 ">
          <video src="/videos/v1.webm"></video>
        </div>
       
      </div> */
}
