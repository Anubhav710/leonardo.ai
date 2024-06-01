export const navItems = [
  {
    name: "Features",
  },
  {
    name: "Solutions",
  },
  {
    name: "Resources",
  },
  {
    name: "For Team",
  },
  {
    name: "For Developer",
  },
  {
    name: "Contact",
  },
];

export const sliderItem = [
  {
    name: "Inspiration",
    img: "/images/Main.jpg",
  },
  {
    name: "Character Design",
    img: "/images/Character-Design.jpg",
  },
  {
    name: "Game Assets",
    img: "/images/Game_asset.jpg",
  },
  {
    name: "Concept Art",
    img: "/images/conceptart.jpg",
  },
  {
    name: "Grapic Design",
    img: "/images/graphicdesign.jpg",
  },
  {
    name: "Fashion",
    img: "/images/Fashion.jpg",
  },
  {
    name: "Marketing",
    img: "/images/marketing.jpg",
  },
  {
    name: "Advertising",
    img: "/images/Advertisting.jpg",
  },
  {
    name: "Architecture",
    img: "/images/Architecture.jpg",
  },
  {
    name: "Interior Design",
    img: "/images/Interior.jpg",
  },
  {
    name: "And Much More",
    img: "/images/1-69-1024x641.png",
  },
];

export const toolItems = [
  {
    name: "Image Generation",
    title: "Image Generation",
    heading: "Envision The Extraordinary",
    paragraph:
      "Take creativity a step further with the transformative power of our Image Generation tool. It not just about bringing your concepts to life — redefine the impossible. From beginners to professionals, we offer a spectrum of settings that can be intuitively tailored to your needs.",
    footer:
      "Discover an unprecedented fusion of simplicity and power, designed to cater to creative minds at all levels.",
    video: "/videos/Generation-Tool-min.mp4",
  },
];

// MAIN WINDOW board

export const surpriseMePrompts = [
  "STICKER ON A WHITE BACKGROUND. green holographic silhouette, knee socks. I'm standing in a room with holograms. anime waifu. Stylish. Cute, hot, shiny. Highly detailed uhd anime wallpaper, cel digital animation",
  "Master professional photography, Bernese Mountain Dog with brown eyes and a bright green bandana with white filigree , smooth textures and details, full body portrait shot, Florida landmarks as background, 64K",
  "extremely beautiful and attractive girl Italian girl, 23 year old, long balayage brown shining hair, smiling, HD, photorealistic, very beautiful, attractive, she is happy, smiling, full body",

  "3d vector Rainbow-colored wavy fractal neon mainecoon cat, stunning, beautiful, eye-catching, masterpiece",
  "Beautiful Elf posing by a tower. with freckles and long black hair braided, warrior. steampunk. Blue eyes",
];

export function getRandomPrompt(prompt: any) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
