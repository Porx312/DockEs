import { EachRoute } from "../routes-config";

export const SOCKET_ROUTES: EachRoute = {
  name: "socketio",
  title: "guia de socket",
  href: "/documentacion",
  noLink: true,
  items: [
    {
      title: "Empezando",
      href: "/empezando",
      noLink: true,
      items: [
        { title: "Instalacion", href: "/instalacion" },
        { title: "Como funciona?", href: "/como-funciona-socketio" },
        { title: "Garantias de entrega", href: "/garantias-entrega-socketio" },
        {
          title: "Recuperacion de estado",
          href: "/recuperacion-estado-conexion-socketio",
        },
        {
          title: "Registro y depuracion",
          href: "/registro-depuracion-socketio",
        },
        { title: "Pruebas con Socket.IO", href: "/pruebas-socketio" },
        {
          title: "Problemas de conexion",
          href: "/solucion-problemas-conexion-socketio",
        },
        { title: "TypeScript en Socket.IO", href: "/typescript-socketio" },
        { title: "Uso de memoria", href: "/uso-memoria-socketio" },
      ],
    },
    {
      title: "Servidor",
      href: "/servidor",
      noLink: true,
      items: [
        { title: "Instalacion", href: "/instalacion-servidor-socketio" },
        { title: "Inicializacion", href: "/inicializacion-servidor-socketio" },
        {
          title: "Instancia del servidor",
          href: "/instancia-servidor-socketio",
        },
        {
          title: "Instancia del socket",
          href: "/instancia-socket-servidor-socketio",
        },
        { title: "Middlewares", href: "/middlewares-socketio" },
        { title: "Proxy inverso", href: "/proxy-inverso-socketio" },
        { title: "Multiples nodos", href: "/multiples-nodos-socketio" },
        { title: "CORS", href: "/cors-socketio" },
        {
          title: "Estructura de aplicaciones ",
          href: "/estructura-aplicacion-socketio",
        },
        { title: "Bundlers", href: "/bundlers-socketio" },
      ],
    },
    {
      title: "Cliente",
      href: "/client",
      noLink: true,
      items: [
        { title: "Instalacion", href: "/Instalacion" },
        { title: "Inicializacion", href: "/inicializacion-socketio-cliente" },
        { title: "Instancia", href: "/instancia-socketio-cliente" },
      { title: "Comportamiento offline", href: "/comportamiento-socketio-offline" },
         { title: "Socket.IO con bundlers", href: "/uso-socketio-cliente-bundlers" },
      ],
    },
  ],
};
