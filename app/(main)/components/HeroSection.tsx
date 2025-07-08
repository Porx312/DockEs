import React from "react";
import BounceCards from "./ui/BounceCard";
import AnimatedIntro from "./ui/AnimateIntro";

const images = [
  "icons/JavaScript.png",
  "icons/nextjs.png",
  "icons/Prisma.svg",
  "icons/Nest.js.png",
  "icons/TypeScript.png",
  "icons/Redis.png",
  "icons/React.png",
];

const transformStyles = [
  "rotate(-8deg) translate(-160px, -90px) scale(0.9)",
  "rotate(12deg) translate(-120px, 80px) scale(0.9)",
  "rotate(-15deg) translate(20px, -120px) scale(1.3)",
  "rotate(8deg) translate(160px, -40px) scale(0.95)",
  "rotate(-5deg) translate(90px, 120px) scale(0.8)",
  "rotate(12deg) translate(-10px, 120px) scale(0.85)",
  "rotate(-12deg) translate(0px, 10px) scale(.8)",
];

const HeroSection = () => {
  return (
    <div className="flex gap-[2px] py-14 flex-row   items-center content-center justify-center flex-wrap">
      <AnimatedIntro />
      <div className="w-[130px] h-auto grow shrink hidden md:block">
        <BounceCards
          className="custom-bounceCards"
          images={images}
          containerWidth={500}
          containerHeight={250}
          animationDelay={0.4}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={false}
        />
      </div>
    </div>
  );
};

export default HeroSection;
