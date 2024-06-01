"use client";
import { useDimention } from "@/hook/useDimention";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const col1 = [
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_A_detailed_logo_for_twitch_illustration_mans_face_with_2_69c97ab5-7d8a-443f-b7dd-07fbd94b9ec1_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_galaxy_stars_energy_diamond_cloud_pink_god_2_6cd9f188-96e6-4722-abd8-b8cf0fcb9fff_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_sticker_of_Boots_from_Dora_the_Explorer_full_body_free_3_f1040f88-913b-4dae-adc9-098d0689e5d8_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/DreamShaper_v7_stary_blackRose_flower_splash_arts_aesthetic_fo_0.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/RPG_40_masterpiece_best_quality_photorealistic_rendering_game_2.jpeg",
];

const col2 = [
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-129.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_Full_body_shot_Not_safe_for_work_full_body_potrait_of_0_df0781e9-d8fe-49e4-9f17-8017d1da7cd7_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_hyper_realistic_ultra_detailed_photograph_of_a_woman_s_1_6d8066d4-4036-4de0-a215-98461459e598_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/DreamShaper_32_sticker_of_Vercingtorix_full_body_freedom_soul_2.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/DreamShaper_v7_ultra_detailed_image_of_lee_pace_as_Thranduil_f_0.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_Full_body_shot_Not_safe_for_work_full_body_potrait_of_0_df0781e9-d8fe-49e4-9f17-8017d1da7cd7_1.jpeg",
];

const col3 = [
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_A_glasslike_alien_floral_monument_is_displayed_in_a_mu_2_1da9c417-902e-41b9-ad0b-215738d36654_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_graphic_design_tshirt_flat_design_Elephant_Miami_stre_0_c3db8621-f68f-479e-94fe-96b726fe67cd_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-131.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-127.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-132.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-133.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/image-128.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Paper_art_style_mushroom_magical_forest_paper_art_0.jpeg",
];

const col4 = [
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_dodge_challenger_in_a_cyber_punk_landscape_0_7b2c7227-b643-4ea4-8393-c6036723fb99_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_Hyper_realistic_spiderman_ancient_samurai_style_use_sa_1_7f41ff36-48f2-4b8f-afe0-41d88b2c6876_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/Default_Unleash_the_power_of_the_cyberpunk_world_in_an_evocati_0_1f5ee7cd-9c1a-4b87-816e-9a825b6158c4_1.jpeg",
  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/DreamShaper_v7_iron_butterfly_butterfly_robot_robot_detailed_2.jpeg",

  "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/DreamShaper_v7_zoom_out_image_battle_scene_A_stunningly_beaut_2.jpeg",
];

const Gallery = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={container}
      className=" grid md:grid-cols-3 grid-cols-2 lg:grid-cols-5  py-5 gap-3  overflow-hidden "
    >
      {/* One  */}
      <div className="space-y-3 cursor-pointer ">
        {col1.map((img, index) => (
          <div key={index} className="relative">
            <Image
              width={400}
              height={100}
              src={img}
              alt=""
              className="rounded-md "
            />
          </div>
        ))}
      </div>
      {/* Two  */}
      <div className="space-y-3 cursor-pointer ">
        {col2.map((img, index) => (
          <div key={index} className="relative">
            <Image
              width={400}
              height={100}
              src={img}
              alt=""
              className="rounded-md "
            />
          </div>
        ))}
      </div>
      {/* Three  */}
      <div className="space-y-3 cursor-pointer ">
        {col3.map((img, index) => (
          <div key={index} className="relative">
            <Image
              width={400}
              height={100}
              src={img}
              alt=""
              className="rounded-md "
            />
          </div>
        ))}
      </div>
      {/* Four  */}
      <div className="space-y-3 cursor-pointer md:hidden  lg:block">
        {col4.map((img, index) => (
          <div key={index} className="relative">
            <Image
              width={400}
              height={100}
              src={img}
              alt=""
              className="rounded-md "
            />
          </div>
        ))}
      </div>
      <div className="space-y-3 cursor-pointer md:hidden lg:block">
        {col2.map((img, index) => (
          <div key={index} className="relative">
            <Image
              width={400}
              height={100}
              src={img}
              alt=""
              className="rounded-md "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
