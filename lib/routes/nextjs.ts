import { EachRoute } from "../routes-config";

export const NEXTJS_ROUTES: EachRoute = {
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
};
