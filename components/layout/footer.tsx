import { Logo } from "@/components/ui/logo";

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
    <footer
      className="bg-transparent backdrop-blur-sm mt-auto"
      style={{ background: "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Logo className="w-6 h-6" />
            <span className="font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              CapMeToo
            </span>
          </div>
          <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground opacity-70">
            <span>© 2024</span>
            <a
              href="https://www.buymeacoffee.com/simeonts"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Buy me a coffee
            </a>
            <span>v.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
