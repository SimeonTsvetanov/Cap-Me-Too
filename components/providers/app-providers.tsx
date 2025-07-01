"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/ui/error-boundary"

interface AppProvidersProps {
  children: React.ReactNode
}

/**
 * App-wide providers wrapper
 * Includes theme provider and error boundary
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  )
}
