'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  LucideLanguages,
  BrainCircuit,
  Globe,
  BookOpenCheck,
} from 'lucide-react';

const features = [
  {
    title: 'Traducciones Manuales y Claras',
    description:
      'Cada documento ha sido traducido cuidadosamente para mantener su precisión técnica, pero con un lenguaje más claro y natural en español.',
    icon: LucideLanguages,
  },
  {
    title: 'Verificadas con IA',
    description:
      'Utilizamos inteligencia artificial para revisar errores, mejorar el estilo y garantizar coherencia en todos los textos.',
    icon: BrainCircuit,
  },
  {
    title: 'Adaptadas al Contexto Hispano',
    description:
      'Modificamos ejemplos, referencias y nombres para que se adapten mejor a la experiencia y cultura de los hispanohablantes.',
    icon: Globe,
  },
  {
    title: 'Siempre Basado en Fuentes Oficiales',
    description:
      'No inventamos nada. Todo el contenido parte de la documentación oficial, luego es traducido y mejorado.',
    icon: BookOpenCheck,
  },
];

const Feature = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll('.feature-item'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.25,
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-20 px-6 md:px-12 ">
    
      <div className="grid md:grid-cols-2  gap-10  mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="feature-item  p-6 rounded-2xl  transition-shadow"
            >
              <div className="mb-4">
                <Icon className="w-10 h-10" />
              </div>
                  <h3 className="text-2xl font-semibold  mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-200 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feature;
