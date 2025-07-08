'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { technologies } from '@/data/technologies';

export default function ChooseTechnology() {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      itemsRef.current,
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
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-background text-foreground px-6 py-16 md:px-12">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-bold mb-4">Elige una tecnología</h1>
        <p className="text-lg text-muted-foreground">
          Aprende tecnologías modernas del ecosistema JavaScript en español.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech, index) => (
       <div
            key={tech.slug}
            ref={(el) => { itemsRef.current[index] = el; }}
            className="group border border-border rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out bg-card"
          >
            <Link href={`${tech.slug}`}>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-14 h-14 object-contain transition-transform group-hover:scale-105"
                />
                <h3 className="text-xl font-semibold">{tech.name}</h3>
                <p className="text-sm text-muted-foreground text-balance">{tech.description}</p>
              </div>
            </Link>
          </div>

        ))}
      </div>
    </section>
  );
}
