import { Logo } from "@/components/ui/logo"

/**
 * Loading screen component shown during app initialization
 * Features:
 * - Centered logo with animation
 * - Smooth fade-in effect
 * - Loading indicator
 * - Brand consistency
 */
export function LoadingScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-pulse">
          <Logo className="w-16 h-16 mx-auto mb-4" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          CapMeToo
        </h1>
        <div className="flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200" />
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-400" />
        </div>
      </div>
    </div>
  )
}
