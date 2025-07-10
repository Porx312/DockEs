// for page navigation & to sort on leftbar

export type EachRoute = {
  name?: string; // name is used for the route segment in the URL
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
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
            title: "event-handler-in-pre-react-18",
            href: "/event-handler-in-pre-react-18",
          },
          { title: "maps-and-sets-usage", href: "/maps-and-sets-usage" },
          {
            title: "connect-to-state-with-url-hash",
            href: "/connect-to-state-with-url-hash",
          },
          { title: "how-to-reset-state", href: "/how-to-reset-state" },
          {
            title: "initialize-state-with-props",
            href: "/initialize-state-with-props",
          },
          { title: "slices-pattern", href: "/slices-pattern" },
          {
            title: "prevent-rerenders-with-use-shallow",
            href: "/prevent-rerenders-with-use-shallow",
          },
          { title: "ssr-and-hydration", href: "/ssr-and-hydration" },
          { title: "nextjs", href: "/nextjs" },
        ],
      },
      {
        title: "Integraciones",
        href: "/integraciones",
        items: [
          { title: "immer-middleware", href: "/immer-middleware" },
          { title: "librerias-de-terceros", href: "/librerias-de-terceros" },
          { title: "persisting-store-data", href: "/persisting-store-data" },
        ],
      },
      {
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
      },
    ],
  },
  {
    name: "nextjs",
    title: "guia de nextjs",
    href: "/empezando",
    noLink: true,
    items: [
      {
        title: "Guias",
        href: "/guias",
        items: [{ title: "iniciar", href: "/iniciar" }],
      },
    ],
  },
  {
    name: "prisma",
    title: "guia de prisma",
    href: "/empezando",
    items: [
      {
        title: "Orm",
        href: "/orm",
        items: [
          {
            title: "overview",
            href: "/overview",
            items: [
              {
                title: "introduction",
                href: "/introduction",
                items: [
                  { title: "what-is-prisma", href: "/what-is-prisma" },
                  { title: "why-prisma", href: "/why-prisma" },
                  {
                    title: "should-you-use-prisma",
                    href: "/should-you-use-prisma",
                  },
                  { title: "data-modeling", href: "/data-modeling" },
                ],
              },
              {
                title: "prisma-in-your-stack",
                href: "/prisma-in-your-stack",
                items: [
                  { title: "rest", href: "/rest" },
                  { title: "graphql", href: "/graphql" },
                  { title: "fullstack", href: "/fullstack" },
                  { title: "is-prisma-an-orm", href: "/is-prisma-an-orm" },
                ],
              },
              {
                title: "databases",
                href: "/databases",
                items: [
                  { title: "database-drivers", href: "/database-drivers" },
                  { title: "postgresql", href: "/postgresql" },
                  { title: "mysql", href: "/mysql" },
                  { title: "sqlite", href: "/sqlite" },
                  { title: "mongodb", href: "/mongodb" },
                  {
                    title: "sql-server",
                    href: "/sql-server",
                    items: [
                      { title: "sql-server-local", href: "/sql-server-local" },
                      {
                        title: "sql-server-docker",
                        href: "/sql-server-docker",
                      },
                    ],
                  },
                  { title: "cockroachdb", href: "/cockroachdb" },
                  { title: "planetscale", href: "/planetscale" },
                  { title: "supabase", href: "/supabase" },
                  { title: "neon", href: "/neon" },
                  { title: "turso", href: "/turso" },
                  { title: "cloudflare-d1", href: "/cloudflare-d1" },
                ],
              },
              {
                title: "beyond-prisma-orm",
                href: "/beyond-prisma-orm",
              },
            ],
          },
          /*  {
            title: "Guias",
            href: "/guias",
            items: [
              { title: "Guía de inicio", href: "/iniciar" },
            ],
          },
          {
            title: "postgres",
            href: "/postgres",
            items: [
              { title: "Inicio con Postgres", href: "/iniciar" },
            ],
          }, */
        ],
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
