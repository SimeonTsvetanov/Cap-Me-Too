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
 * - Perfect centering of icon
 */
export function HamburgerButton({ onClick, isOpen }: HamburgerButtonProps) {
  return (
    <div className="flex items-center justify-center w-10 h-10 hover:bg-accent/50 rounded-md transition-colors">
      <div className="flex items-center justify-center">
        <Hamburger
          toggled={isOpen}
          toggle={onClick}
          size={20}
          duration={0.4}
          distance="sm"
          color="currentColor"
          rounded
          label="Toggle menu"
          style={{
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </div>
  );
}
