import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

// Metadados globais do site (título e descrição usados no <head>).
export const metadata: Metadata = {
  title: "Portfolio",
  description: "A minimal portfolio of projects.",
};

/**
 * Layout raiz da aplicação. Envolve todas as páginas com a estrutura
 * HTML base e carrega os estilos globais.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
