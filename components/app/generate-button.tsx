"use client";

import { Button } from "@/components/ui/button";

interface GenerateButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}

/**
 * Generate caption button component
 * Features:
 * - Gradient background
 * - Loading animation
 * - Hover effects
 * - Disabled states
 * - Smooth transitions
 */
export function GenerateButton({
  onClick,
  disabled,
  isLoading,
}: GenerateButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="lg"
      className={`px-12 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:from-primary/90 hover:via-purple-500/90 hover:to-pink-500/90 text-white shadow-lg"
      }`}
    >
      <>
        <span className="mr-3 text-xl">🎨</span>
        Generate Caption
      </>
    </Button>
  );
}
