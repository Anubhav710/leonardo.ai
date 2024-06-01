import Footer from "@/components/sections/Footer";
import React, { ReactNode } from "react";
import { ImageProvider } from "@/context/imageContext";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-[#09040B] text-white">{children}</div>;
};

export default RootLayout;
