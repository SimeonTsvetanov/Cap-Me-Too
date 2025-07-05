"use client";

import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { HamburgerButton } from "@/components/ui/hamburger-button";
import { SidebarMenu } from "@/components/ui/sidebar-menu";

interface HeaderProps {
  currentApiKey: string;
  onApiKeyUpdate: (apiKey: string) => void;
}

/**
 * Fixed header component with sidebar menu
 * Features:
 * - Logo with brand name
 * - Hamburger button for menu
 * - Direct API key management in sidebar
 * - No separate settings modal needed
 */
export function Header({ currentApiKey, onApiKeyUpdate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 bg-background/70 backdrop-blur-md transition-all duration-300">
        <div className="px-0">
          <div className="flex items-center justify-between h-16 flex-row">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Logo className="w-8 h-8" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                CapMeToo
              </h1>
            </div>

            {/* Hamburger Button */}
            <HamburgerButton onClick={() => setIsMenuOpen(true)} />
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <SidebarMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentApiKey={currentApiKey}
        onApiKeyUpdate={onApiKeyUpdate}
      />
    </>
  );
}
