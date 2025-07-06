"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlurOverlay } from "@/components/ui/blur-overlay";
import { RippleOverlay } from "@/components/ui/ripple-overlay";

interface CaptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  caption: string;
  onRegenerate: () => void;
  onCopy: () => void;
  isGenerating: boolean;
}

/**
 * Caption display modal with floating design and proper accessibility
 * Features:
 * - Full blur overlay background
 * - Floating card with drop shadow
 * - No borders for modern look
 * - Copy and regenerate functionality
 * - Loading states
 * - Responsive design
 * - Fixed accessibility warnings
 */
export function CaptionModal({
  isOpen,
  onClose,
  caption,
  onRegenerate,
  onCopy,
  isGenerating,
}: CaptionModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <RippleOverlay
        isVisible={isGenerating}
        message="Regenerating caption..."
      />

      <BlurOverlay onClick={onClose}>
        <Card
          className="w-full max-w-2xl mx-4 shadow-floating no-border animate-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="caption-modal-title"
          aria-describedby="caption-modal-description"
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3
                id="caption-modal-title"
                className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
              >
                Your Caption ✨
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="rounded-full w-8 h-8 p-0 hover:bg-destructive/10 hover:text-destructive"
                aria-label="Close caption modal"
              >
                ×
              </Button>
            </div>

            <div
              id="caption-modal-description"
              className="bg-muted/50 rounded-xl p-6 mb-6 shadow-inner"
            >
              <p className="text-lg leading-relaxed whitespace-pre-wrap">
                {caption}
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  onClose();
                  setTimeout(onRegenerate, 100);
                }}
                disabled={isGenerating}
                className="hover:bg-accent/50 transition-colors shadow-floating no-border"
              >
                {isGenerating ? (
                  <>
                    <span className="animate-spin mr-2">🔄</span>
                    Generating...
                  </>
                ) : (
                  <>🔄 Regenerate</>
                )}
              </Button>
              <Button
                onClick={onCopy}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-floating"
              >
                📋 Copy Caption
              </Button>
            </div>
          </CardContent>
        </Card>
      </BlurOverlay>
    </>
  );
}
