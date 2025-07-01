"use client";

import { useEffect } from "react";

/**
 * Performance monitoring component
 * Tracks Core Web Vitals and reports to console in development
 */
export function PerformanceMonitor() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // WHY: Not all PerformanceEntry types have a 'value' property. TypeScript will error if we access it blindly.
          // WHEN: Only log 'value' if it exists on the entry (e.g., for measures, paints, etc.)
          // HOW: Use 'in' operator to check for 'value' property at runtime, and type assertion to satisfy TypeScript.
          // WHY: This prevents runtime errors and satisfies TypeScript's type checking for production builds.
          if ("value" in entry) {
            // Type assertion: entry as any, since 'value' is not in the base type but present in some subclasses
            console.log(`${entry.name}: ${(entry as any).value}`);
          } else {
            console.log(`${entry.name}`);
          }
        }
      });

      try {
        observer.observe({ entryTypes: ["measure", "navigation", "paint"] });
      } catch (e) {
        // Fallback for browsers that don't support all entry types
        console.log("Performance monitoring not fully supported");
      }

      return () => observer.disconnect();
    }
  }, []);

  return null;
}
