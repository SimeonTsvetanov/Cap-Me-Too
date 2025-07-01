"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { BlurOverlay } from "@/components/ui/blur-overlay"

interface HamburgerMenuProps {
  isOpen: boolean
  onToggle: () => void
  onSettingsClick: () => void
}

/**
 * Animated hamburger menu with exactly 3 items and subtle blur
 * Features:
 * - Theme toggle
 * - API key settings
 * - Buy Me a Coffee support link
 * - Smooth animations and hover effects
 * - Click outside to close functionality
 * - No borders, floating card design
 * - More subtle blur effect
 */
export function HamburgerMenu({ isOpen, onToggle, onSettingsClick }: HamburgerMenuProps) {
  return (
    <div className="relative">
      {/* Hamburger Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="relative w-10 h-10 p-0 focus:outline-none hover:bg-accent/50 transition-colors"
      >
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-5 h-4 relative">
            <span
              className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 w-full h-0.5 bg-current transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-current transform transition-all duration-300 ${
                isOpen ? "top-2 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </div>
      </Button>

      {/* Menu */}
      {isOpen && (
        <BlurOverlay onClick={onToggle}>
          <Card
            className="w-full max-w-sm mx-4 shadow-floating no-border animate-in zoom-in-95 duration-300 bg-background/95 backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Menu
                </h3>
              </div>

              <div className="space-y-3">
                {/* 1. Theme Toggle */}
                <div className="flex items-center justify-between p-4 hover:bg-accent/30 rounded-xl transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🎨</span>
                    <span className="font-medium">Theme</span>
                  </div>
                  <ThemeToggle />
                </div>

                {/* 2. API Key Settings */}
                <Button
                  variant="ghost"
                  onClick={() => {
                    onSettingsClick()
                    onToggle()
                  }}
                  className="w-full justify-start p-4 h-auto hover:bg-accent/30 rounded-xl transition-colors"
                >
                  <span className="text-lg mr-3">🔑</span>
                  <span className="font-medium">API Key</span>
                </Button>

                {/* 3. Buy Me a Coffee */}
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start p-4 h-auto hover:bg-accent/30 rounded-xl transition-colors"
                >
                  <a
                    href="https://buymeacoffee.com/simeontsvetanov"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onToggle}
                  >
                    <span className="text-lg mr-3">☕</span>
                    <span className="font-medium">Buy me a coffee</span>
                  </a>
                </Button>
              </div>

              <div className="mt-6 pt-4 border-t border-border/30 text-center">
                <p className="text-xs text-muted-foreground">CapMeToo v1.0.0</p>
              </div>
            </CardContent>
          </Card>
        </BlurOverlay>
      )}
    </div>
  )
}
