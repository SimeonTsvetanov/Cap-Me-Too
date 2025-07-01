"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface HamburgerButtonProps {
  onClick: () => void
}

/**
 * Simple hamburger button component
 * Features:
 * - Clean hamburger icon using Lucide
 * - Hover effects
 * - Accessible button
 * - Consistent styling
 */
export function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="w-10 h-10 p-0 hover:bg-accent/50 transition-colors"
      aria-label="Open menu"
    >
      <Menu className="h-5 w-5" />
    </Button>
  )
}
