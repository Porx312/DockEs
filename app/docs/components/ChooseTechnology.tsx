"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Importar el componente Button de shadcn/ui
import BtnPricing from "@/components/clerk/btnPricing";

// Definir el tipo para cada tecnología, ahora con una categoría
export type Technology = {
  slug: string;
  name: string;
  description: string;
  iconDark: string;
  iconLight?: string;
  comingSoon?: boolean;
  ispro?: boolean;
  category:
    | "frontend"
    | "backend"
    | "database"
    | "library"
    | "authentication"
    | "state-management"
    | "other"; // Nuevas categorías
};

// Definir las categorías disponibles
const categories = [
  { name: "Todo", value: "all" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
  { name: "Base de Datos", value: "database" },
  { name: "Librerías", value: "library" },
  { name: "Autenticación", value: "authentication" },
  { name: "Gestor de Estado", value: "state-management" },
  { name: "Otros", value: "other" },
];

export default function ChooseTechnologyClient({
  technologies,
}: {
  technologies: Technology[];
}) {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all"); // Estado para el filtro activo

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Reiniciar animaciones cuando cambia la categoría activa
      gsap.fromTo(
        itemsRef.current.filter(Boolean), // Filtrar elementos nulos
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
        },
      );
    }
  }, [mounted, activeCategory]); // Dependencia de activeCategory para re-animar

  // Filtrar tecnologías basadas en la categoría activa
  const filteredTechnologies = technologies.filter((tech) => {
    if (activeCategory === "all") {
      return true;
    }
    return tech.category === activeCategory;
  });

  // Mostrar un fallback hasta que el componente esté montado
  if (!mounted) {
    return (
      <section className="min-h-screen bg-background text-foreground px-6 py-16 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">Elige una tecnología</h1>
          <p className="text-lg text-muted-foreground">
            Aprende tecnologías modernas del ecosistema JavaScript en español.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <div
              key={cat.value}
              className="h-10 w-24 bg-gray-200 rounded-md animate-pulse"
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech) =>
            tech ? (
              <div
                key={tech.slug}
                className="group border border-border rounded-2xl p-6 text-center cursor-pointer bg-card relative opacity-0"
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  {/* Fallback para la imagen con un placeholder animado */}
                  <div className="w-14 h-14 bg-gray-200 rounded animate-pulse" />
                  <div className="h-6 bg-gray-200 rounded w-24 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
                </div>
              </div>
            ) : null,
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-16 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-bold mb-4">Elige una tecnología</h1>
        <p className="text-lg text-muted-foreground">
          Aprende tecnologías modernas del ecosistema JavaScript en español.
        </p>
      </div>

      {/* Controles de filtro */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={activeCategory === cat.value ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.value)}
            className="px-4 py-2 rounded-full text-sm"
          >
            {cat.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {filteredTechnologies.map((tech, index) =>
          tech ? (
            <div
              key={tech.slug}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={clsx(
                "group border border-border rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out bg-card relative",
                tech.comingSoon && "opacity-75",
              )}
            >
              {tech.comingSoon && (
                <span className="absolute -top-2 -right-2 z-10 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full shadow-md">
                  Próximamente
                </span>
              )}
              {tech.ispro && (
                <BtnPricing className="absolute -top-2 -right-2 z-10" />
              )}
              {tech.comingSoon ? (
                <div className="flex flex-col items-center justify-center space-y-4 cursor-not-allowed">
                  <Image
                    src={
                      theme === "dark"
                        ? tech.iconDark
                        : tech.iconLight || tech.iconDark
                    }
                    alt={tech.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 object-contain grayscale"
                    priority={index < 3}
                  />
                  <h3 className="text-xl font-semibold text-gray-500">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-400 text-balance">
                    {tech.description}
                  </p>
                </div>
              ) : (
                <Link href={tech.slug}>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Image
                      src={
                        theme === "dark"
                          ? tech.iconDark
                          : tech.iconLight || tech.iconDark
                      }
                      alt={tech.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain transition-transform group-hover:scale-105"
                      priority={index < 3}
                    />
                    <h3 className="text-xl font-semibold">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground text-balance">
                      {tech.description}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ) : null,
        )}
      </div>
    </section>
  );
}
