"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ApiKeySetup } from "@/components/setup/api-key-setup";
import { MainApp } from "@/components/app/main-app";
import { CaptionModal } from "@/components/modals/caption-modal";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { useStorage } from "@/hooks/use-storage";
import { useCaption } from "@/hooks/use-caption";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

/**
 * Main application component with simplified API key handling
 * Features:
 * - Smart API key validation and storage
 * - Multi-language support
 * - Theme consistency
 * - Modal management
 * - Loading states
 * - No separate settings modal
 */
export default function CapMeToo() {
  // Detect if running on the server (static export)
  const isServer = typeof window === "undefined";

  // Client-side state
  const [isLoading, setIsLoading] = useState(true);
  const { apiKey, saveApiKey, isStorageReady, isApiKeyValid } = useStorage();
  const {
    currentImage,
    setCurrentImage,
    selectedTopic,
    setSelectedTopic,
    selectedLanguage,
    setSelectedLanguage,
    caption,
    isGenerating,
    showCaptionModal,
    setShowCaptionModal,
    generateCaption,
    copyCaption,
  } = useCaption(apiKey);

  useEffect(() => {
    if (isStorageReady) {
      setIsLoading(false);
    }
  }, [isStorageReady]);

  const handleApiKeySave = async (newApiKey: string) => {
    try {
      await saveApiKey(newApiKey);
    } catch (error) {
      throw new Error("Invalid API key. Please check and try again.");
    }
  };

  // --- STATIC EXPORT: Always render main UI with demo/disabled state ---
  if (isServer) {
    return (
      <div className="min-h-screen text-foreground transition-colors duration-300 flex flex-col">
        <Header currentApiKey={"demo-key"} onApiKeyUpdate={() => {}} />
        <main className="pt-20 pb-0 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <MainApp
                currentImage={null}
                setCurrentImage={() => {}}
                selectedTopic={null}
                setSelectedTopic={() => {}}
                selectedLanguage={"en"}
                setSelectedLanguage={() => {}}
                onGenerateCaption={() => {}}
                isGenerating={false}
              />
            </div>
          </div>
        </main>
        <Footer />
        {/* No modals or API key logic in static export */}
      </div>
    );
  }

  // --- CLIENT: Normal logic ---
  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!apiKey || isApiKeyValid === false) {
    return <ApiKeySetup onApiKeySave={handleApiKeySave} />;
  }

  return (
    <div className="min-h-screen text-foreground transition-colors duration-300 flex flex-col">
      {process.env.NODE_ENV === "development" && <PerformanceMonitor />}
      <Header currentApiKey={apiKey} onApiKeyUpdate={handleApiKeySave} />
      <main className="pt-20 pb-0 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <MainApp
              currentImage={currentImage}
              setCurrentImage={setCurrentImage}
              selectedTopic={selectedTopic}
              setSelectedTopic={setSelectedTopic}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              onGenerateCaption={generateCaption}
              isGenerating={isGenerating}
            />
          </div>
        </div>
      </main>
      <Footer />
      <CaptionModal
        isOpen={showCaptionModal}
        onClose={() => setShowCaptionModal(false)}
        caption={caption}
        onRegenerate={generateCaption}
        onCopy={copyCaption}
        isGenerating={isGenerating}
      />
    </div>
  );
}
