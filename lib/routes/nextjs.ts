import { EachRoute } from "../routes-config";

export const NEXTJS_ROUTES: EachRoute = {
  name: "nextjs",
  title: "guia de nextjs",
  href: "/documentacion",
  noLink: true,
  items: [
    {
      title: "Empezando",
      href: "/empezando",
      items: [{ title: "Instalacion de Next.js", href: "/instalacion-nextjs" }],
    },
  ],
};
