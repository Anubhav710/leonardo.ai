"use client";
import { useEffect, useState } from "react";

export const useDimention = () => {
  const [dimention, setDimention] = useState({ width: 0, height: 0 });
  const updateDimention = () => {
    const { innerHeight, innerWidth } = window;
    setDimention({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateDimention();
    window.addEventListener("resize", updateDimention);
    return () => {
      window.removeEventListener("resize", updateDimention);
    };
  }, []);
  return dimention;
};
