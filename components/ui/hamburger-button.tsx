"use client";

import Hamburger from "hamburger-react";

interface HamburgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

/**
 * Animated hamburger button component
 * Features:
 * - Smooth animation transforming into X
 * - CSS-driven transitions for performance
 * - Consistent positioning and sizing
 * - Hover effects
 * - Accessible button
 */
export function HamburgerButton({ onClick, isOpen }: HamburgerButtonProps) {
  return (
    <div className="flex items-center justify-center w-10 h-10 hover:bg-accent/50 rounded-md transition-colors">
      <Hamburger
        toggled={isOpen}
        toggle={onClick}
        size={20}
        duration={0.4}
        distance="sm"
        color="currentColor"
        rounded
        label="Toggle menu"
      />
    </div>
  );
}
