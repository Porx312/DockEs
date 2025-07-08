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
    name: "docs",
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },
      {
        title: "Project Structure",
        href: "/project-structure",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          { title: "Stepper", href: "/stepper" },
          { title: "Tabs", href: "/tabs" },
          { title: "Note", href: "/note" },
          { title: "Code Block", href: "/code-block" },
          { title: "Image & Link", href: "/image-link" },
          { title: "File System", href: "/file-system", tag: "New" },
          { title: "Custom", href: "/custom" },
        ],
      },
      { title: "Internationalization", href: "/i18n" },
      { title: "Algolia Search", href: "/algolia-search", tag: "New" },
      { title: "Themes", href: "/themes" },
      {
        title: "Customize",
        href: "/customize",
      },
    ],
  },
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
          { title: "Tutorial Tic-Tac-Toe", href: "/tutorial-tic-tac-toe" },
          { title: "Actualizando Estado", href: "/actualizando-estado" },
          {
            title: "Estado inmutable y fusión",
            href: "/estado-inmutable-y-fusion",
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
