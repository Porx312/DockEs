import { EachRoute } from "../routes-config";

export const TS_ROUTES: EachRoute = {
  name: "typescript",
  title: "documentacion de TypeScript",
  href: "/documentacion",
  items: [
    {
      title: "empezando",
      href: "/empezando",
      items: [
        {
          title: "Typescript como tu primer lenguaje",
          href: "/introduccion-typescript",
        },
        {
          title: "TypeScript para Programadores de JavaScript",
          href: "/para-programadores-javascript",
        },
        {
          title: "TypeScript para Programadores de Java o C#:",
          href: "/typescript-para-programadores-java-csharp",
        },
        {
          title: " Herramientas de TypeScript en 5 minutos",
          href: "/herramientas-en-5-minutos",
        },
      ],
    },
    {
      title: "Manual Typescript ",
      href: "/manual",
      items: [
        { title: "Introducción", href: "/introduccion" },
        { title: "Fundamentos", href: "/fundamentos" },
        {
          title: "Tipos comunes JS y TS",
          href: "/tipos-comunes-javascript-typescript",
        },
        {
          title: "Uniones discriminadas & never",
          href: "/uniones-discriminadas-never-typescript",
        },
        { title: "Funciones", href: "/mas-sobre-funciones-typescript" },
        { title: "Genéricos TS", href: "/genericos" },
        {
          title: "Manipulación de Tipos",
          href: "/manipulacion-de-tipos",
          items: [
            {
              title: "Genéricos y Varianza en TS",
              href: "/patrones-genericos",
            },
            { title: "Operador keyof", href: "/operador-keyof" },
            { title: "Operador typeof", href: "/operador-typeof" },
            {
              title: "Tipos de acceso indexado",
              href: "/tipo-de-acceso-indexado",
            },
            { title: "Tipos condicionales", href: "/tipos-condicionales" },
            { title: "Tipos mapeados", href: "/tipos-mapeados" },
            { title: "Template Literal Types ", href: "/template-literal" },
          ],
        },
        { title: "Clases", href: "/clases" },
        { title: "Modulos", href: "/modulos" },
      ],
    },
    /* {
        title: "Apis",
        href: "/apis",
        items: [
          { title: "createstore", href: "/createstore" },
          { title: "createwithequalityfn", href: "/createwithequalityfn" },
          { title: "create", href: "/create" },
          { title: "shallow", href: "/shallow" },
        ],
      },
      {
        title: "Hooks",
        href: "/hooks",
        items: [
          { title: "useshallow", href: "/useshallow" },
          { title: "usestorewithequalityfn", href: "/usestorewithequalityfn" },
          { title: "usestore", href: "/usestore" },
        ],
      },
      {
        title: "Middleware",
        href: "/middlewares",
        items: [
          { title: "combine", href: "/combine" },
          { title: "devtools", href: "/devtools" },
          { title: "immer", href: "/immer" },
          { title: "persist", href: "/persist" },
          { title: "redux", href: "/redux" },
          { title: "subscribewithselector", href: "/subscribewithselector" },
        ],
      }, */
  ],
};
