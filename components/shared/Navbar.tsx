"use client";
import React from "react";
import { navItems } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="z-[999]    fixed top-0 left-0 right-0   py-4">
      <div className="wrapper px-4  max-w-screen-xl mx-auto flex items-center justify-between  ">
        {/* LEFT ITMES */}
        <div className="">
          <Image
            height={100}
            width={180}
            src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/leonardo-logo-white.svg"
            alt="logo"
          />
        </div>
        {/* MIDDLE ITEMS  */}
        <div className=" flex-[2] hidden lg:block ">
          <ul className="flex justify-evenly">
            {navItems.map((item) => (
              <Link href={"/"} key={item.name} className="text-white mx-3">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
        {/* RIGHT ITEMS  */}
        <div className="hidden lg:flex space-x-3">
          <Button route="/register">Launch App</Button>
        </div>

        {/* Mobile Navbar  */}
        <nav>
          <MobileNav />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
