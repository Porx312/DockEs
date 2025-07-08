"use client";

import { useEffect, useRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const ShowCaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current.children,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
      },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-6 items-center justify-center py-20 px-6 md:px-0 text-center max-w-5xl mx-auto"
    >
      <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
        La mejor documentación técnica en Español
      </h2>

      <h3 className="text-lg md:text-2xl text-muted-foreground max-w-2xl">
        Traducciones cuidadosas y adaptadas para que aprendas rápidamente y sin
        complicaciones.
      </h3>

      <Image
        src="/shots.png"
        alt="Ejemplo de documentación en español"
        width={1080}
        height={640}
        className="rounded-xl  object-cover w-full h-auto"
        priority
      />

      <Link
        href="/docs"
        className={buttonVariants({
          className: "px-8 py-4 text-base md:text-lg",
          size: "lg",
        })}
      >
        Empezar Ahora
      </Link>
    </div>
  );
};

export default ShowCaseSection;
