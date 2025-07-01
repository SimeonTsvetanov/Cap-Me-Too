"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"

/**
 * Global error boundary
 * Features:
 * - Catches unhandled errors
 * - Provides recovery options
 * - Maintains branding
 * - Error reporting
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="w-full max-w-md shadow-floating no-border">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <Logo className="w-12 h-12 mr-3" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CapMeToo
                </h1>
              </div>

              <div className="text-6xl mb-4">😵</div>

              <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>

              <p className="text-muted-foreground mb-6">
                We encountered an unexpected error. Don't worry, your data is safe. Try refreshing the page or contact
                support if the problem persists.
              </p>

              <div className="space-y-3">
                <Button onClick={reset} className="w-full shadow-floating">
                  🔄 Try Again
                </Button>
                <Button variant="outline" asChild className="w-full shadow-floating no-border bg-transparent">
                  <a href="/">🏠 Go Home</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
