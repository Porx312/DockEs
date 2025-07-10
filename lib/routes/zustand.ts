import { EachRoute } from "../routes-config";

export const ZUSTAND_ROUTES: EachRoute = {
  name: "zustand",
  title: "Guia de Zustand",
  href: "/empezando",
  noLink: true,
  items: [
    { title: "Introduction", href: "/introduccion" },
    {
      title: "Guías",
      href: "/guias",
      items: [
        { title: "Actualizando Estado", href: "/actualizando-estado" },
        {
          title: "Prácticas inspiradas en Flux",
          href: "/practicas-inspiradas-en-Flux",
        },
        {
          title: "estado inmutable y merging",
          href: "/estado-inmutable-y-merging",
        },
        {
          title: "Auto Generacion De Selectores",
          href: "/auto-generacion-de-selectores",
        },
        {
          title: "Practica Sin Acciones En El Store",
          href: "/practica-sin-acciones-en-el-store",
        },
        { title: "Zustand + TypeScript", href: "/typescript" },
        { title: "testing", href: "/testing" },
        {
          title: "Llamar acciones fuera de un event handler en React pre-18",
          href: "/llamar-acciones-fuera-event-handler-pre-react-18",
        },
        { title: "Uso de Map y Set", href: "/uso-de-map-y-set-con-zustand" },
        {
          title: "Conectar estado con el hash de la URL",
          href: "/conectar-zustand-con-la-url-hash-queryparams",
        },
        {
          title: "Como reiniciar el estado en Zustand",
          href: "/como-reiniciar-el-estado-en-zustand",
        },
        {
          title: "Inicializar Zustand con props usando React Context",
          href: "/inicializar-zustand-con-props-usando-react-context",
        },
        {
          title: "Patron de Slices en Zustand",
          href: "/patron-de-slices-en-zustand",
        },
        {
          title: "Evitar re-renderizados con useShallow en Zustand",
          href: "/evitar-re-renderizados-con-useshallow-en-zustand",
        },
        {
          title: "SSR y Hydration con Zustand y React",
          href: "/ssr-y-hidratacion-con-zustand-y-react",
        },
        {
          title: "Configuración de Zustand con Next.js",
          href: "/configuracion-de-zustand-con-nextjs",
        },
      ],
    },
    {
      title: "Integraciones",
      href: "/integraciones",
      items: [
        {
          title: "middleware Immer con Zustand",
          href: "/usar-middleware-immer-con-zustand",
        },
        {
          title: "Librerias de terceros para Zustand",
          href: "/librerias-de-terceros",
        },
        {
          title: "Persistir el estado con Zustand",
          href: "/persistir-el-estado-con-zustand",
        },
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
