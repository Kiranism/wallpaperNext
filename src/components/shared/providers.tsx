"use client";
import { type ThemeProviderProps } from "next-themes/dist/types";
import ThemeProvider from "./theme-provider";
export default function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
