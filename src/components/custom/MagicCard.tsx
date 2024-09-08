"use client";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/magicui/magic-card";
import Meteors from "../magicui/meteors";
import BlurFade from "../magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;
export default function MagicCards({ children }: { children: any }) {
  const { theme } = useTheme();
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 6 * 0.05}>
    <MagicCard
      className=" py-5 px-3"
      gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
    >
      <Meteors number={15} />
      {children}
    </MagicCard>
    </BlurFade>
  );
}
