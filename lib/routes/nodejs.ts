import { EachRoute } from "../routes-config";

export const NODEJS_ROUTES: EachRoute = {
  name: "nodejs",
  title: "documentacion de nodejs",
  href: "/documentacion",
  noLink: true,
  items: [
    {
      title: "Primeros Pasos",
      href: "/primeros-pasos",
      noLink: true, 
      items: [
        {title: "Introduccion a nodejs", href: "/introduccion-a-nodejs"},
        {title: "Cuanto Saber de Javascript", href: "/cuanto-saber-de-javascript"},
        {title: "Node.js vs Navegador", href: "/diferencias-nodejs-navegador"},
        {title: "El Motor V8 Javascript", href: "/motor-v8-javascript"},
        {title: "Guia de npm para Node.js", href: "/introduccion-npm-nodejs"},
         {title: "ECMAScript en Node.js", href: "/ecmascript-es6-nodejs"},
        {title: "Node.js Desarrollo vs Produccion", href: "/nodejs-desarrollo-vs-produccion"},
        {title: "WebAssembly en Node.js", href: "/nodejs-webassembly"},
         {title: "Depurar Node.js", href: "/depuracion-nodejs"},
         {title: "Perfilado en Node.js", href: "/perfilado-nodejs"},
         {title: "Fetch con Undici", href: "/fetch-undici-nodejs"},
             {title: "WebSocket en Node.js", href: "/websocket-nativo-nodejs"},
              {title: "Seguridad en Node.js", href: "/seguridad-nodejs"},
      ]
    },
     {
      title: "Typescript",
      href: "/typescript",
      noLink: true, 
      items: [
        {title: "Typescript Para desarrolladores", href: "/introduccion-typescript"},
        {title: "Ejecutar TS en Node.js", href: "/ejecutar-typescript-nativamente"},
            {title: " Ejecutar TS con tsc", href: "/ejecutar-codigo-typescript-usando-transpilacion"},
      {title: "Distribuye tu código TS como paquete", href: "/publicar-paquete-typescript"},
     
          ]
    },
       {
      title: "Asincronia Nodejs",
      href: "/asincrono",
      noLink: true, 
      items: [
        {title: "Flujo asincrono en JS", href: "/control-flujo-asincrono-javascript"},
             {title: "Bloqueantes vs No Bloqueantes en Node.js", href: "/diferencias-bloqueantes-no-bloqueantes-nodejs"},
   {title: "Asincronía y Callbacks en JavaScript", href: "/programacion-asincrona-javascript-callbacks"},
              ]
    },
  ],
};
