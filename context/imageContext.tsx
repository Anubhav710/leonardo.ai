"use client";
import { createContext, useContext, useState } from "react";

type ImageDimensions = {
  width: number;
  height: number;
};

type ImageContextProps = {
  imageNum: number;
  setImageNum: (newImageNum: number) => void; // Define function type for update
  dimention: ImageDimensions;
  setDimention: (newDimention: ImageDimensions) => void; // Define function type for update
  coin: number;
  setCoin: any;
  loader: boolean;
  setLoader: any;
};

export const ImageContext = createContext<ImageContextProps | undefined>(
  undefined
);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [imageNum, setImageNum] = useState(1);
  const [coin, setCoin] = useState(40);
  const [dimention, setDimention] = useState<ImageDimensions>({
    width: 512,
    height: 512,
  });

  const [loader, setLoader] = useState(false);

  return (
    <ImageContext.Provider
      value={{
        loader,
        setLoader,
        coin,
        setCoin,
        imageNum,
        setImageNum,
        dimention,
        setDimention,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);

  // Handle potential missing context gracefully (e.g., throw an error or provide a default value)
  if (!context) {
    throw new Error("ImageContext must be used within an ImageProvider");
  }

  return context;
};
