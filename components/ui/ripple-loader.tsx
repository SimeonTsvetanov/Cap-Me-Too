"use client";

import { cn } from "@/lib/utils";

interface RippleLoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

/**
 * Ripple loading animation component
 * Features:
 * - Pulsing concentric circles
 * - Uses accent color from theme
 * - Multiple sizes available
 * - Smooth animations
 * - Centered display
 */
export function RippleLoader({ className, size = "md" }: RippleLoaderProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const dotSizes = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        sizeClasses[size],
        className
      )}
    >
      {/* Outer ripple */}
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping animation-delay-0" />

      {/* Middle ripple */}
      <div className="absolute inset-2 rounded-full bg-primary/30 animate-ping animation-delay-300" />

      {/* Inner ripple */}
      <div className="absolute inset-4 rounded-full bg-primary/40 animate-ping animation-delay-600" />

      {/* Center dot */}
      <div
        className={cn(
          "absolute rounded-full bg-primary animate-pulse",
          dotSizes[size]
        )}
      />

      <style jsx>{`
        .animation-delay-0 {
          animation-delay: 0ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </div>
  );
}
