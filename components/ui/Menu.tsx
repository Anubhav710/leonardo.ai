import { navItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Menu = ({ setActive, active }: { setActive: any; active: boolean }) => {
  return (
    <div
      className={`${
        active ? "absolute" : "hidden"
      } bg-[#09040B] inset-0 h-screen w-screen flex items-center justify-center`}
    >
      <ul className="flex flex-col gap-7 text-center font-bold text-3xl ">
        {navItems.map((item) => (
          <Link href={"/"} key={item.name}>
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
