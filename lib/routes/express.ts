import { EachRoute } from "../routes-config";

export const EXPRESS_ROUTES: EachRoute = {
  name: "express",
  title: "documentacion de Express",
  href: "/documentacion",
  noLink: true,
  items: [
    {
      title: "Empezando",
      href: "/empezando",
      noLink: true,
      items: [
        {
          title: "Instalar Express en Node.js",
          href: "/como-instalar-express-nodejs",
        },
        {
          title: "Hola Mundo con Express",
          href: "/ejemplo-hola-mundo-express-nodejs",
        },
        {
          title: "Express Generator en Node.js",
          href: "/como-usar-express-generator-nodejs",
        },
        {
          title: "Enrutamiento en Express",
          href: "/enrutamiento-basico-express-nodejs",
        },
        {
          title: "Archivos estaticos en Express",
          href: "/servir-archivos-estaticos-express-nodejs",
        },
      ],
    },
    {
      title: "Guia",
      href: "/guia",
      noLink: true,
      items: [
        {
          title: "Enrutamiento Avanzado ",
          href: "/enrutamiento-avanzado-express-nodejs",
        },
        {
          title: "Escribir Middleware en Express",
          href: "/escribir-middleware-express-nodejs",
        },
        {
          title: "Usar Middleware en Express",
          href: "/usar-middleware-express-nodejs",
        },
        {
          title: "Sobrescribir API de Express",
          href: "/sobrescribir-api-express-nodejs",
        },
        {
          title: "Motores de plantillas en Express",
          href: "/motores-plantillas-express",
        },
        {
          title: "Manejo de errores en Express",
          href: "/manejo-errores-express",
        },
        {
          title: "Depuracion en Express",
          href: "/depuracion-express",
        },
        {
          title: "Express con proxies",
          href: "/express-detras-proxies",
        },
        {
          title: "Bases de datos en Express",
          href: "/integracion-bases-datos-express",
        },
      ],
    },
  ],
};
