"use client";
import { motion, MotionConfig } from "framer-motion";
import React, { useState } from "react";

const HamburgerMenu = ({
  setActive,
  active,
}: {
  setActive: any;
  active: boolean;
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        animate={active ? "open" : "close"}
        className="flex flex-col gap-[6px] relative z-40 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <motion.div
          variants={{
            open: {
              rotate: -45,
              y: 10,
            },
          }}
          className="w-8 h-[3px] bg-red-20 bg-white origin-center"
        />
        <motion.div
          variants={{
            open: { rotate: 45 },
          }}
          className="w-8  h-[3px] bg-white"
        />
        <motion.div
          variants={{
            open: {
              rotate: 45,
              y: 3,
              x: -5,
            },
          }}
          className="w-8 h-[3px]  bg-white origin-right"
        />
      </motion.div>
    </MotionConfig>
  );
};

export default HamburgerMenu;
