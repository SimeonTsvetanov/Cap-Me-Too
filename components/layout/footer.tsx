

/**
 * Minimal footer component with sticky bottom positioning
 * Features:
 * - Slim single-line design
 * - Sticky to bottom (not fixed overlay)
 * - Transparent background
 * - Simple links and copyright
 * - Minimal footprint
 */
export function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-sm border-t border-white/5 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground opacity-70">
          <span>© 2024</span>
          <a
            href="https://www.buymeacoffee.com/simeonts"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:opacity-100 transition-opacity"
          >
            Buy me a coffee
          </a>
          <span>v.1</span>
        </div>
      </div>
    </footer>
  );
}
