"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"; // ajusta si tu ruta varía

gsap.registerPlugin(ScrollTrigger);

const AnimatedIntro = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-auto w-[150px] flex gap-2 flex-col justify-start items-start grow-[2] shrink order-none"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold leading-tight  tracking-tight fade-in">
        Domina las Tecnologías del Ecosistema de JavaScript — en Español
      </h2>

      <h3 className="text-2xl md:text-3xl text-muted-foreground fade-in ">
        Aprende Next.js, Prisma, TypeScript y mucho más con contenido claro, en
        tu idioma.
      </h3>

      <Link
        href="/docs"
        className={`${buttonVariants({ className: "px-6", size: "lg" })} fade-in`}
      >
        Empezar Ahora
      </Link>
    </div>
  );
};

export default AnimatedIntro;
