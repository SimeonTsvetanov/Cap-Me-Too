"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

/**
 * Theme provider component for dark/light mode support
 * Features:
 * - System theme detection
 * - Persistent theme storage
 * - Smooth theme transitions
 * - SSR compatibility
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
