"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({
  children,
  className,
  route,
}: {
  children: React.ReactNode;
  className?: string;
  route?: string;
}) => {
  const router = useRouter();
  return (
    <div
      className="flex group relative  "
      onClick={() => router.push(`${route}`)}
    >
      <div
        className={` ${className} px-6 py-3 relative  transition-property overflow-hidden  cursor-pointer z-50 rounded-xl font-semibold   text-white gradient-1  `}
      >
        <h1 className="relative z-10 ">{children}</h1>
        <div className="px-6 py-3 absolute h-full w-full     hgradient-1 top-0 left-[100%] group-hover:left-0 duration-700 transition-all ease-in-out "></div>
      </div>
    </div>
  );
};

export default Button;
