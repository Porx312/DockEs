import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});
export const metadata: Metadata = {
  title: "DocsJs - documentación en español",
  metadataBase: new URL("https://www.docsjs.com/"),
  description:
    "DocsJs es un proyecto de documentación en español para Next.js, React y otras tecnologías web. Aquí encontrarás guías, tutoriales y recursos para mejorar tus habilidades de desarrollo web.",
  other: {
    "google-site-verification": "bTOPYCV6jNyIDuIkkVMoAvwwXsBxpM9VWYNaS0a_f00",
  },
  alternates: {
    canonical: "https://www.docsjs.com/", // https://dock-es.vercel.app/
  },
  icons: {
  icon: "/logos/favicon.ico", // Usa tu archivo SVG en la carpeta public
},

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          />
        </head>
        <body
          className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />

            <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
              <ConvexClientProvider>{children}</ConvexClientProvider>
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
