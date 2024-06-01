"use server";

import Replicate from "replicate";

type Props = {
  prompt: string;
  number: number;
};

export async function generateImage(
  prompt: string,
  number: number,
  width?: number,
  height?: number
) {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API,
  });
  if (!prompt) {
    console.log("Error");
  }
  const response: any = await replicate.run(
    "bytedance/sdxl-lightning-4step:5f24084160c9089501c1b3545d9be3c27883ae2239b6f412990e82d4a6210f8f",
    {
      input: {
        prompt,
        num_outputs: number,
        width,
        height,
      },
    }
  );

  return response;
}
