"use client";

import { Box, Flex } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const fg = "var(--fg)";
const activeBg = "color-mix(in srgb, var(--fg) 25%, transparent)";
const inactive = "color-mix(in srgb, var(--fg) 40%, transparent)";

function Moon({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function Sun({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Box
      as="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      display="flex"
      h="20px"
      borderWidth="1.5px"
      borderColor={fg}
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      visibility={mounted ? "visible" : "hidden"}
    >
      <Flex w="22px" align="center" justify="center" bg={isDark ? activeBg : "transparent"}>
        <Moon color={isDark ? fg : inactive} />
      </Flex>
      <Flex w="22px" align="center" justify="center" bg={isDark ? "transparent" : activeBg}>
        <Sun color={isDark ? inactive : fg} />
      </Flex>
    </Box>
  );
}
