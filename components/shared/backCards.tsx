"use client";
import React, { useEffect, useRef } from "react";
import BlurCard from "./BlurCard";
import { motion, useScroll, useTransform } from "framer-motion";

const BackCards = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  let y = useTransform(scrollYProgress, [0.5, 1], [0, -400]);
  let x = useTransform(scrollYProgress, [0.5, 1], [0, -200]);
  let x2 = useTransform(scrollYProgress, [0.5, 1], [0, 200]);
  let x3 = useTransform(scrollYProgress, [0.5, 1], [0, 500]);

  return (
    <div ref={ref} className=" h-screen  hidden lg:block ">
      <motion.div
        style={{ y: y, x, rotate: "15deg" }}
        className=" rotate-[15deg]  bg-gradient-to-b overflow-hidden    absolute top-48  left-56  from-white/20 to-white/20 shadow-lg border border-white/60   backdrop-blur w-max p-4 rounded-[40px]"
      >
        <BlurCard src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/Default_Insanity_1-768x1152.jpg" />
      </motion.div>
      <motion.div
        style={{ y: y, x: x2, rotate: "-15deg" }}
        className="  bg-gradient-to-b overflow-hidden    absolute top-48 right-56 -rotate-[15deg]  from-white/20 to-white/20 shadow-lg border border-white/60   backdrop-blur w-max p-4 rounded-[40px]"
      >
        <BlurCard
          className="object-top"
          src="https://cdn.leonardo.ai/users/36eaf46c-5e7e-4c84-af12-0e6db4636398/generations/b21eb1b4-12e5-41e5-bef9-b2cc20cbe6b6/Default_With_a_luminous_digital_aura_lighting_up_the_darkness_1.jpg?w=512"
        />
      </motion.div>
      <motion.div
        style={{ y: y, x: x2, rotate: "15deg" }}
        className="  bg-gradient-to-b overflow-hidden  rotate-[10deg]  absolute -bottom-[67%] right-40  from-white/20 to-white/20 shadow-lg border border-white/60   backdrop-blur w-max p-4 rounded-[40px]"
      >
        <BlurCard src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/UniversalUpscaler-768x512.jpg" />
      </motion.div>
      <motion.div
        style={{ y: y, x, rotate: "-15deg" }}
        className="  bg-gradient-to-b overflow-hidden -rotate-[10deg]   absolute -bottom-[67%] left-40   from-white/20 to-white/20 shadow-lg border border-white/60   backdrop-blur w-max p-4 rounded-[40px]"
      >
        <BlurCard src="https://leonardo-cdn.b-cdn.net/wp-content/uploads/2024/05/image-187-e1716735467311-1024x576.jpg" />
      </motion.div>
    </div>
  );
};

export default BackCards;
