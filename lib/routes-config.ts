import path from "path"; // Importar el módulo 'path' para la manipulación de rutas
// Importar las rutas específicas de cada tecnología
import {
  NEXTJS_ROUTES,
  NODEJS_ROUTES,
  PRISMA_ROUTES,
  TS_ROUTES,
  ZUSTAND_ROUTES,
} from "./routes/index";

// Definición del tipo para cada elemento de ruta en la navegación
export type EachRoute = {
  name?: string; // Usado para el segmento de ruta en la URL (ej. "nextjs")
  title: string; // Título a mostrar en la navegación
  href: string; // URL relativa o absoluta del segmento
  noLink?: true; // Si es true, crea una sección pero no es navegable directamente
  items?: EachRoute[]; // Sub-rutas anidadas
  tag?: string; // Etiqueta opcional (ej. "Nuevo", "Beta")
};

// Combinar todas las rutas de las diferentes tecnologías en un solo array
// Se usa el operador spread con una comprobación de Array.isArray para asegurar que
// cada elemento se trate como un array, incluso si es un solo objeto EachRoute.
export const ROUTES: EachRoute[] = [
  ...(Array.isArray(ZUSTAND_ROUTES) ? ZUSTAND_ROUTES : [ZUSTAND_ROUTES]),
  ...(Array.isArray(NEXTJS_ROUTES) ? NEXTJS_ROUTES : [NEXTJS_ROUTES]),
  ...(Array.isArray(PRISMA_ROUTES) ? PRISMA_ROUTES : [PRISMA_ROUTES]),
  ...(Array.isArray(TS_ROUTES) ? TS_ROUTES : [TS_ROUTES]),
  ...(Array.isArray(NODEJS_ROUTES) ? NODEJS_ROUTES : [NODEJS_ROUTES]),
];

// Tipo para las páginas finales aplanadas
type Page = { title: string; href: string };

/**
 * Función recursiva para aplanar la estructura de rutas anidadas
 * y construir las URLs completas de cada página.
 * Utiliza path.posix.join para una concatenación de URLs robusta.
 *
 * @param node El nodo de ruta actual a procesar.
 * @param parentHref La URL base del nodo padre.
 * @returns Un array de objetos Page con el título y la URL completa.
 */
function getRecurrsiveAllLinks(node: EachRoute, parentHref = ""): Page[] {
  const ans: Page[] = [];
  // Construir la URL completa para el nodo actual
  // path.posix.join es ideal para URLs, maneja slashes correctamente.
  const currentFullHref = path.posix.join(parentHref, node.href);

  // Si el nodo no tiene la propiedad 'noLink', se añade a la lista de páginas
  if (!node.noLink) {
    ans.push({ title: node.title, href: currentFullHref });
  }

  // Si el nodo tiene sub-elementos, se llama recursivamente para cada uno
  node.items?.forEach((subNode) => {
    // Se pasa la URL completa del nodo actual como 'parentHref' para los sub-nodos
    ans.push(...getRecurrsiveAllLinks(subNode, currentFullHref));
  });

  return ans;
}

// Aplanar todas las rutas para generar la lista final de 'page_routes'
// Se inicia la recursión para cada ruta principal con "/" como URL base.
export const page_routes = ROUTES.flatMap((it) =>
  getRecurrsiveAllLinks(it, "/"),
);
