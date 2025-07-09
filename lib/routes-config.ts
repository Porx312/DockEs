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
