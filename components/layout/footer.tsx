import { Logo } from "@/components/ui/logo"

/**
 * Footer component with custom logo and Buy Me a Coffee link
 * Features:
 * - Custom user logo instead of emoji
 * - Buy Me a Coffee support link
 * - App version and copyright
 * - No borders for clean look
 * - Responsive design
 */
export function Footer() {
  return (
    <footer className="bg-muted/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Logo className="w-6 h-6" />
            <span className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              CapMeToo
            </span>
          </div>

          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Transform your photos into engaging social media captions with the power of AI. Create, customize, and share
            amazing content effortlessly.
          </p>

          <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground">
            <span>© 2024 CapMeToo</span>
            <span>•</span>
            <a
              href="https://buymeacoffee.com/simeontsvetanov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              ☕ Buy me a coffee
            </a>
            <span>•</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
