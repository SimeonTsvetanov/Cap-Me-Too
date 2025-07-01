"use client"

import { useEffect } from "react"

/**
 * Performance monitoring component
 * Tracks Core Web Vitals and reports to console in development
 */
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.value}`)
        }
      })

      try {
        observer.observe({ entryTypes: ["measure", "navigation", "paint"] })
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log("Performance monitoring not fully supported")
      }

      return () => observer.disconnect()
    }
  }, [])

  return null
}
