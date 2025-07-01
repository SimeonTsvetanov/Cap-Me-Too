"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { BlurOverlay } from "@/components/ui/blur-overlay"

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
  currentApiKey: string
  onApiKeyUpdate: (apiKey: string) => void
}

/**
 * Settings modal with floating design
 * Features:
 * - API key update functionality
 * - Theme toggle
 * - Secure input with visibility toggle
 * - Floating card with drop shadow
 * - No borders for modern look
 * - Form validation
 */
export function SettingsModal({ isOpen, onClose, currentApiKey, onApiKeyUpdate }: SettingsModalProps) {
  const [newApiKey, setNewApiKey] = useState("")
  const [showApiKey, setShowApiKey] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  if (!isOpen) return null

  const handleUpdate = async () => {
    if (newApiKey.trim().length > 10) {
      setIsUpdating(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onApiKeyUpdate(newApiKey.trim())
      setNewApiKey("")
      setIsUpdating(false)
      onClose()
    }
  }

  return (
    <BlurOverlay onClick={onClose}>
      <Card
        className="w-full max-w-md mx-4 shadow-floating no-border animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Settings</h3>
            <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full w-8 h-8 p-0">
              ×
            </Button>
          </div>

          <div className="space-y-6">
            {/* Theme Settings */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Theme</label>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Appearance</span>
                <ThemeToggle />
              </div>
            </div>

            {/* API Key Settings */}
            <div className="space-y-3">
              <label className="text-sm font-medium">API Key</label>
              <div className="relative">
                <Input
                  type={showApiKey ? "text" : "password"}
                  placeholder="Enter new API key"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                  className="pr-10 shadow-inner"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 p-0"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? "🙈" : "👁️"}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Current key: {currentApiKey.slice(0, 8)}...{currentApiKey.slice(-4)}
              </p>
            </div>

            {/* Buy Me a Coffee Link */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Support</label>
              <Button
                variant="outline"
                asChild
                className="w-full shadow-floating no-border hover:bg-accent/50 bg-transparent"
              >
                <a href="https://buymeacoffee.com/simeontsvetanov" target="_blank" rel="noopener noreferrer">
                  ☕ Buy me a coffee
                </a>
              </Button>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={onClose} className="flex-1 shadow-floating no-border bg-transparent">
              Cancel
            </Button>
            <Button
              onClick={handleUpdate}
              disabled={newApiKey.trim().length <= 10 || isUpdating}
              className="flex-1 shadow-floating"
            >
              {isUpdating ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Updating...
                </>
              ) : (
                "Update"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </BlurOverlay>
  )
}
