import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Logo } from "@/components/ui/logo"

/**
 * 404 Not Found page
 * Features:
 * - Friendly error message
 * - Navigation back to home
 * - Consistent branding
 * - Responsive design
 */
export default function NotFound() {
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

          <div className="text-6xl mb-4">🤔</div>

          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>

          <p className="text-muted-foreground mb-6">
            Oops! The page you're looking for doesn't exist. Let's get you back to creating amazing captions!
          </p>

          <Button asChild className="shadow-floating">
            <Link href="/">🏠 Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
