"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

/**
 * Chakra UI + alternância light/dark (next-themes).
 * A classe `light` / `dark` no <html> alinha com globals.css.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
