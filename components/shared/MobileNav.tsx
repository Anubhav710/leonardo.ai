"use client";
import React, { useState } from "react";
import HamburgerMenu from "../ui/HamburgerMenu";
import Menu from "../ui/Menu";

const MobileNav = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="text-white block lg:hidden    ">
      <div>
        <HamburgerMenu setActive={setActive} active={active} />
        <Menu setActive={setActive} active={active} />
      </div>
    </div>
  );
};

export default MobileNav;
