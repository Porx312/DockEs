import { EachRoute } from "../routes-config";

export const PRISMA_ROUTES: EachRoute = {
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
};
