"use client";
import { useImageContext } from "@/context/imageContext";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({
  children,
  link,
  onClick,
}: {
  children: React.ReactNode;
  link?: any;
  onClick?: any;
  disable?: boolean;
}) => {
  const loading = useImageContext();

  const { loader } = loading;

  return (
    <button
      onClick={onClick}
      disabled={loader}
      className={cn(
        `space-x-3 flex w-40 h-12 ${
          loader ? "bg-gray-500" : "gradient-1"
        } items-center justify-center mt-5 md:mt-0 hover:bg-gradient-to-r  rounded-lg `
      )}
    >
      {children}
    </button>
  );
};

export default Button;
