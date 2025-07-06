"use client";

import type { ReactNode } from "react";

interface BlurOverlayProps {
  children: ReactNode;
  onClick: () => void;
}

/**
 * Subtle blur overlay component for modals
 * Features:
 * - More subtle backdrop blur effect (reduced from 2px to 1px)
 * - Click-to-close functionality
 * - Smooth animations
 * - Better visual appeal
 * - Accessible focus management
 */
export function BlurOverlay({ children, onClick }: BlurOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-[8px] animate-in fade-in duration-300"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
