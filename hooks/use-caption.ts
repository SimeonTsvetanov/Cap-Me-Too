"use client"

import { useState } from "react"
import { generateCaptionWithAI, getFallbackCaption } from "@/utils/caption-generator"

/**
 * Enhanced caption hook with multi-language support
 * Features:
 * - Image management
 * - Topic and language selection
 * - AI-powered caption generation in multiple languages
 * - GitHub Pages compatible serverless functions
 * - Loading states and modal management
 * - Copy functionality with notifications
 */
export function useCaption(apiKey: string) {
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const [selectedTopic, setSelectedTopic] = useState("funny") // Default to funny
  const [selectedLanguage, setSelectedLanguage] = useState("en") // Default to English
  const [caption, setCaption] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showCaptionModal, setShowCaptionModal] = useState(false)

  const generateCaption = async () => {
    if (!currentImage || !apiKey) return

    setIsGenerating(true)

    try {
      const generatedCaption = await generateCaptionWithAI({
        imageData: currentImage,
        topic: selectedTopic,
        language: selectedLanguage,
        apiKey,
      })

      setCaption(generatedCaption)
      setShowCaptionModal(true)
    } catch (error) {
      console.error("Caption generation failed:", error)
      // Fallback to sample captions if API fails
      const fallbackCaption = getFallbackCaption(selectedTopic, selectedLanguage)
      setCaption(fallbackCaption)
      setShowCaptionModal(true)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(caption)
      showNotification("Caption copied to clipboard! 🎉", "success")
    } catch (error) {
      console.error("Failed to copy caption:", error)
      showNotification("Failed to copy caption", "error")
    }
  }

  return {
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
  }
}

function showNotification(message: string, type: "success" | "error") {
  const notification = document.createElement("div")
  notification.textContent = message
  notification.className = `fixed top-20 right-4 px-4 py-2 rounded-lg shadow-floating z-50 animate-in slide-in-from-right duration-300 ${
    type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`
  document.body.appendChild(notification)
  setTimeout(() => {
    notification.remove()
  }, 3000)
}
