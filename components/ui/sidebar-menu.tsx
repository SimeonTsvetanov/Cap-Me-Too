"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { HamburgerButton } from "@/components/ui/hamburger-button";
import { Key } from "lucide-react";
import { useTheme } from "next-themes";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentApiKey: string;
  onApiKeyUpdate: (apiKey: string) => void;
}

/**
 * Sidebar menu component with direct API key configuration
 * Features:
 * - Theme toggle
 * - Direct API key input (no separate settings modal)
 * - Buy Me a Coffee link
 * - Proper accessibility and error handling
 * - Fixed console warnings
 */
export function SidebarMenu({
  isOpen,
  onClose,
  currentApiKey,
  onApiKeyUpdate,
}: SidebarMenuProps) {
  const [newApiKey, setNewApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleBodyScroll = () => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    };

    document.addEventListener("keydown", handleEscape);
    handleBodyScroll();

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleApiKeyUpdate = async () => {
    if (newApiKey.trim().length > 10) {
      setIsUpdating(true);
      try {
        await onApiKeyUpdate(newApiKey.trim());
        setNewApiKey("");
        onClose();
      } catch (error) {
        console.error("Failed to update API key:", error);
      } finally {
        setIsUpdating(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Full-screen backdrop with blur */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sidebar-title"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/20">
            <h2
              id="sidebar-title"
              className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
            >
              Menu
            </h2>
            <HamburgerButton onClick={onClose} isOpen={true} />
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-6 space-y-6">
            {/* Theme Toggle */}
            <div
              className="flex items-center justify-between p-4 hover:bg-accent/30 rounded-xl transition-colors group cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">🎨</span>
                <div>
                  <span className="font-medium block">Theme</span>
                  <span className="text-sm text-muted-foreground">
                    Switch between light and dark mode
                  </span>
                </div>
              </div>
              <ThemeToggle />
            </div>

            {/* API Key Configuration */}
            <div className="space-y-4 p-4 hover:bg-accent/30 rounded-xl transition-colors">
              <div className="flex items-center space-x-3">
                <Key className="h-5 w-5 text-primary" />
                <div>
                  <span className="font-medium block">API Key</span>
                  <span className="text-sm text-muted-foreground">
                    Manage your Google AI API key
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <Input
                    type={showApiKey ? "text" : "password"}
                    placeholder="Enter new API key"
                    value={newApiKey}
                    onChange={(e) => setNewApiKey(e.target.value)}
                    className="pr-10 shadow-inner bg-background/50"
                    aria-label="New API key"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 h-8 w-8 p-0"
                    onClick={() => setShowApiKey(!showApiKey)}
                    aria-label={showApiKey ? "Hide API key" : "Show API key"}
                  >
                    {showApiKey ? "🙈" : "👁️"}
                  </Button>
                </div>

                {currentApiKey && (
                  <p className="text-xs text-muted-foreground">
                    Current: {currentApiKey.slice(0, 8)}...
                    {currentApiKey.slice(-4)}
                  </p>
                )}

                <Button
                  onClick={handleApiKeyUpdate}
                  disabled={newApiKey.trim().length <= 10 || isUpdating}
                  className="w-full shadow-floating"
                  size="sm"
                >
                  {isUpdating ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Updating...
                    </>
                  ) : (
                    "Update Key"
                  )}
                </Button>
              </div>
            </div>

            {/* Buy Me a Coffee */}
            <Button
              variant="ghost"
              asChild
              className="w-full justify-start p-4 h-auto hover:bg-accent/30 rounded-xl transition-colors group"
            >
              <a
                href="https://buymeacoffee.com/simeontsvetanov"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
              >
                <span className="text-xl mr-3">☕</span>
                <div className="text-left">
                  <span className="font-medium block">Buy me a coffee</span>
                  <span className="text-sm text-muted-foreground">
                    Support the development
                  </span>
                </div>
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border/20">
            <div className="text-center space-y-2">
              <p className="text-sm font-medium">CapMeToo</p>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
              <p className="text-xs text-muted-foreground">
                AI-Powered Caption Generator
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
