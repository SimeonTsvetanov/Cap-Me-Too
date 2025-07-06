"use client";

import { ImageUpload } from "@/components/app/image-upload";
import { TopicLanguageSelector } from "@/components/app/topic-language-selector";
import { GenerateButton } from "@/components/app/generate-button";
import { Card, CardContent } from "@/components/ui/card";
import { RippleOverlay } from "@/components/ui/ripple-overlay";

interface MainAppProps {
  currentImage: string | null;
  setCurrentImage: (image: string | null) => void;
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (language: string) => void;
  onGenerateCaption: () => void;
  isGenerating: boolean;
}

/**
 * Main application content with modern floating card design
 * Features:
 * - Single floating card with glass effect
 * - Hover effects with enhanced shadows
 * - Transparent background to showcase particles
 * - Modern spacing and typography
 * - Smooth animations and transitions
 * - All content contained within the card
 */
export function MainApp({
  currentImage,
  setCurrentImage,
  selectedTopic,
  setSelectedTopic,
  selectedLanguage,
  setSelectedLanguage,
  onGenerateCaption,
  isGenerating,
}: MainAppProps) {
  return (
    <>
      <RippleOverlay isVisible={isGenerating} message="Generating magic..." />
      
      <main className="pt-20 pb-8 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card
            className="
            relative overflow-hidden no-border
            bg-background/80 backdrop-blur-xl
            shadow-floating hover:shadow-floating-dark
            transition-all duration-500 ease-out
            hover:scale-[1.02] hover:bg-background/85
            hover-lift group
            border border-white/10 dark:border-white/5
            mx-auto
          "
          >
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Hero Section */}
              <div className="text-center space-y-4 mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                Transform Your Photos
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                Upload your photo, choose a style and language, then let AI
                create the perfect social media caption for you.
              </p>
            </div>

            {/* Content Sections */}
            <div className="space-y-8 sm:space-y-12">
              {/* Image Upload Section */}
              <div className="transition-all duration-300 group-hover:scale-[1.01] transform">
                <ImageUpload
                  currentImage={currentImage}
                  onImageChange={setCurrentImage}
                />
              </div>

              {/* Topic and Language Selection */}
              <div className="transition-all duration-300 group-hover:scale-[1.01] transform">
                <TopicLanguageSelector
                  selectedTopic={selectedTopic}
                  onTopicChange={setSelectedTopic}
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={setSelectedLanguage}
                />
              </div>

              {/* Generate Button */}
              <div className="text-center transition-all duration-300 group-hover:scale-[1.01] transform pt-2 sm:pt-4">
                <GenerateButton
                  onClick={onGenerateCaption}
                  disabled={!currentImage || isGenerating}
                  isLoading={isGenerating}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
    </>
  );
}
