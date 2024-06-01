import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
import Box from "../register/components/Box";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { AppleIcon } from "lucide-react";
import Image from "next/image";

const page = () => {
  const image =
    "https://app.leonardo.ai/_next/image?url=%2Fimg%2Flogin-hero-images%2F%E4%BD%A0%E5%A4%A7%E7%88%BA.webp&w=3840&q=75";
  const img2 =
    "https://app.leonardo.ai/_next/image?url=%2Fimg%2Fleonardo-logo.png&w=96&q=75";

  return (
    <div className="h-screen w-full">
      {/* Wrapper div  */}
      <div className=" h-full w-full   bg-[url('https://app.leonardo.ai/_next/image?url=%2Fimg%2Flogin-hero-images%2F%E4%BD%A0%E5%A4%A7%E7%88%BA.webp&w=3840&q=75')] bg-cover bg-fixed bg-no-repeat bg-center">
        <div className="bg-black/60 px-16   py-7 h-full w-full ">
          <div className="h-full w-full flex  rounded-lg overflow-hidden">
            {/* Mian elements   */}
            <div className=" flex flex-col   flex-1 text-white  bg-[#171717]">
              <div className=" px-7 md:px-10  py-7 flex flex-col justify-evenly items-center h-full w-full   ">
                <Link href={"/"} className="flex flex-col items-center ">
                  <Image
                    height={80}
                    width={80}
                    src={img2}
                    alt=""
                    className="w-20 h-20"
                  />
                  <h5 className="">Sign up or Login with</h5>
                </Link>
                {/* BOXES MICROSOFT, APPLE, GOOGLE  */}
                <div className="w-full space-y-3">
                  <Box
                    text="Apple"
                    icon={<FaApple className="w-full h-full" />}
                  />
                  <Box
                    text="Google"
                    icon={<FcGoogle className="w-full h-full" />}
                  />
                  <Box
                    text="Microsoft"
                    icon={
                      <BsMicrosoft className="w-full h-full text-blue-600" />
                    }
                  />
                </div>
                {/* USERNAME AND PASSWORD BOXS  */}
                <div className="w-full space-y-5">
                  <div className="flex flex-col">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="name@host.com"
                      className="bg-black py-2 px-3 text-gray-500 rounded-lg mt-2 outline-none focus:outline-1 focus:outline-violet-700"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="bg-black py-2 px-3 text-gray-500 rounded-lg mt-2 outline-none focus:outline-1 focus:outline-violet-700"
                    />
                  </div>
                  <Button className="w-[90%] mx-auto text-center font-normal py-4">
                    Sign in
                  </Button>
                  <div>
                    <p className="text-sm text-center">
                      Need an account?{" "}
                      <Link href={"/register"} className="text-violet-700">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col gap-4 items-center">
                    <h1>Available now on iOS</h1>
                    <div className=" gradient-1 p-[1px] rounded-lg ">
                      <div className="flex bg-[#191919] rounded-lg p-2 space-x-2 items-center">
                        <div className="h-10 w-10">
                          <FaApple className="h-full w-full" />
                        </div>
                        <div>
                          <p className="text-sm">Download on the</p>
                          <h1 className="font-semibold text-xl">App Store</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="flex gap-28 mt-3 text-xs text-gray-300 ">
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                </footer>
              </div>
            </div>
            {/* Right Side  */}
            <div className="bg-green-40 lg:flex-[3] md:flex-[1]  flex-[0] ">
              <Image
                height={1080}
                width={1080}
                src={image}
                alt=""
                className=" object-cover h-full w-full object-center "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
