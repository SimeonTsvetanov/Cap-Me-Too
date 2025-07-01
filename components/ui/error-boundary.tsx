"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; reset: () => void }>
}

/**
 * React Error Boundary component
 * Catches JavaScript errors anywhere in the child component tree
 */
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return (
        <FallbackComponent
          error={this.state.error}
          reset={() => this.setState({ hasError: false, error: undefined })}
        />
      )
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, reset }: { error?: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-floating no-border">
        <CardContent className="p-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Logo className="w-12 h-12 mr-3" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              CapMeToo
            </h1>
          </div>

          <div className="text-6xl mb-4">💥</div>

          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>

          <p className="text-muted-foreground mb-6">
            We encountered an unexpected error. Don't worry, your data is safe.
          </p>

          {error && (
            <details className="text-left mb-4 p-3 bg-muted/50 rounded-lg">
              <summary className="cursor-pointer text-sm font-medium">Error Details</summary>
              <pre className="text-xs mt-2 overflow-auto">{error.message}</pre>
            </details>
          )}

          <div className="space-y-3">
            <Button onClick={reset} className="w-full shadow-floating">
              🔄 Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.reload()}
              className="w-full shadow-floating no-border bg-transparent"
            >
              🔄 Reload Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
