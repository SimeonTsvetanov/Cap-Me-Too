"use client";

import { RippleLoader } from "@/components/ui/ripple-loader";

interface RippleOverlayProps {
  isVisible: boolean;
  message?: string;
}

/**
 * Full-screen ripple overlay for loading states
 * Features:
 * - Full-screen blur overlay
 * - Centered ripple animation
 * - Optional loading message
 * - Blocks interaction during loading
 * - Smooth fade in/out animation
 */
export function RippleOverlay({
  isVisible,
  message = "Generating magic...",
}: RippleOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-[12px] animate-in fade-in duration-300">
      <div className="text-center space-y-6">
        <RippleLoader size="lg" />
        <p className="text-xl font-medium text-foreground/90 animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
}
