// for page navigation & to sort on leftbar
import {NEXTJS_ROUTES,PRISMA_ROUTES,ZUSTAND_ROUTES} from './routes/index'


export type EachRoute = {
  name?: string; // name is used for the route segment in the URL
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  ...(Array.isArray(ZUSTAND_ROUTES) ? ZUSTAND_ROUTES : [ZUSTAND_ROUTES]),
  ...(Array.isArray(NEXTJS_ROUTES) ? NEXTJS_ROUTES : [NEXTJS_ROUTES]),
  ...(Array.isArray(PRISMA_ROUTES) ? PRISMA_ROUTES : [PRISMA_ROUTES]),

  
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
