"use client"

import { ImageUpload } from "@/components/app/image-upload"
import { TopicLanguageSelector } from "@/components/app/topic-language-selector"
import { GenerateButton } from "@/components/app/generate-button"

interface MainAppProps {
  currentImage: string | null
  setCurrentImage: (image: string | null) => void
  selectedTopic: string
  setSelectedTopic: (topic: string) => void
  selectedLanguage: string
  setSelectedLanguage: (language: string) => void
  onGenerateCaption: () => void
  isGenerating: boolean
}

/**
 * Main application content with streamlined UI
 * Features:
 * - Image upload section
 * - Topic and language dropdowns under image picker
 * - Generate button
 * - Responsive layout with proper spacing
 * - Smooth animations
 * - No borders throughout
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
    <main className="pt-20 pb-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Transform Your Photos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload your photo, choose a style and language, then let AI create the perfect social media caption for
              you.
            </p>
          </div>

          {/* Image Upload Section */}
          <ImageUpload currentImage={currentImage} onImageChange={setCurrentImage} />

          {/* Topic and Language Selection - Under Image Picker */}
          <TopicLanguageSelector
            selectedTopic={selectedTopic}
            onTopicChange={setSelectedTopic}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />

          {/* Generate Button */}
          <div className="text-center">
            <GenerateButton
              onClick={onGenerateCaption}
              disabled={!currentImage || isGenerating}
              isLoading={isGenerating}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
