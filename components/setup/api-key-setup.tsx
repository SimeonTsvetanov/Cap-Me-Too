"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { AnimatedBackground } from "@/components/ui/animated-background";

interface ApiKeySetupProps {
  onApiKeySave: (apiKey: string) => void;
}

/**
 * API Key setup screen with modern borderless design and proper accessibility
 * Features:
 * - Step-by-step instructions for getting Google AI API key
 * - Secure input with toggle visibility
 * - Animated background with floating shapes
 * - Floating card design with drop shadows
 * - No borders for modern look
 * - Form validation and loading states
 * - Fixed accessibility warnings
 */
export function ApiKeySetup({ onApiKeySave }: ApiKeySetupProps) {
  const [apiKey, setApiKey] = useState("");
  const [showApiKey, setShowApiKey] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (apiKey.trim().length > 10) {
      setIsLoading(true);
      setError("");
      try {
        // Simulate validation delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await onApiKeySave(apiKey.trim());
      } catch (err) {
        setError("Invalid API key. Please check and try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* AnimatedBackground for API key setup screen only */}
      <AnimatedBackground />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-lg shadow-floating no-border backdrop-blur-sm bg-background/80">
          <CardContent className="p-8">
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Logo className="w-12 h-12 mr-3" />
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  CapMeToo
                </h1>
              </div>
              <p className="text-muted-foreground">
                AI-Powered Caption Generator
              </p>
            </div>

            {/* Setup Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get Started</h2>
                <p className="text-muted-foreground mb-6">
                  To use CapMeToo, you'll need a Google AI API key. Don't worry,
                  it's free and takes just a few minutes!
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-500 text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Your API Key</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Visit Google AI Studio to get your free API key
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="shadow-floating no-border bg-transparent hover:bg-accent/50"
                    >
                      <a
                        href="https://aistudio.google.com/app/apikey"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Get API Key →
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-500 text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Enter Your Key</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Paste your API key below (it stays on your device)
                    </p>
                    <div className="relative">
                      <Input
                        type={showApiKey ? "text" : "password"}
                        placeholder="Enter your Google AI API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="pr-10 shadow-inner bg-background/50"
                        aria-label="Google AI API key"
                        aria-describedby={error ? "api-key-error" : undefined}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-1 top-1 h-8 w-8 p-0"
                        onClick={() => setShowApiKey(!showApiKey)}
                        aria-label={
                          showApiKey ? "Hide API key" : "Show API key"
                        }
                      >
                        {showApiKey ? "🙈" : "👁️"}
                      </Button>
                    </div>
                    {error && (
                      <p
                        id="api-key-error"
                        className="text-sm text-destructive mt-2"
                      >
                        {error}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                disabled={apiKey.trim().length <= 10 || isLoading}
                className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 transition-all duration-300 shadow-floating"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Validating...
                  </>
                ) : (
                  "Start Using CapMeToo"
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground bg-muted/30 p-4 rounded-xl shadow-inner">
                🔒 Your API key is stored securely on your device and never
                shared
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
