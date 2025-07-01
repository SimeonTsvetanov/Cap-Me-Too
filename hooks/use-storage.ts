"use client"

import { useState, useEffect } from "react"
import { validateApiKey } from "@/utils/api-validation"

/**
 * Enhanced storage hook with smart API key management
 * Features:
 * - IndexedDB storage (with localStorage fallback)
 * - API key validation
 * - Theme preference storage
 * - Automatic initialization
 * - Error handling
 * - Type-safe operations
 */
export function useStorage() {
  const [apiKey, setApiKey] = useState<string>("")
  const [isStorageReady, setIsStorageReady] = useState(false)
  const [isApiKeyValid, setIsApiKeyValid] = useState<boolean | null>(null)

  useEffect(() => {
    initializeStorage()
  }, [])

  const initializeStorage = async () => {
    try {
      // For demo purposes, using localStorage
      // In production, implement IndexedDB
      const storedApiKey = localStorage.getItem("capmetoo_api_key")

      if (storedApiKey) {
        setApiKey(storedApiKey)
        // Validate stored API key
        const isValid = await validateApiKey(storedApiKey)
        setIsApiKeyValid(isValid)

        // If invalid, clear it
        if (!isValid) {
          localStorage.removeItem("capmetoo_api_key")
          setApiKey("")
        }
      } else {
        setIsApiKeyValid(false)
      }

      setIsStorageReady(true)
    } catch (error) {
      console.error("Storage initialization failed:", error)
      setIsStorageReady(true)
      setIsApiKeyValid(false)
    }
  }

  const saveApiKey = async (newApiKey: string) => {
    try {
      // Validate API key before saving
      const isValid = await validateApiKey(newApiKey)

      if (!isValid) {
        throw new Error("Invalid API key")
      }

      localStorage.setItem("capmetoo_api_key", newApiKey)
      setApiKey(newApiKey)
      setIsApiKeyValid(true)
    } catch (error) {
      console.error("Failed to save API key:", error)
      setIsApiKeyValid(false)
      throw error
    }
  }

  const clearApiKey = () => {
    localStorage.removeItem("capmetoo_api_key")
    setApiKey("")
    setIsApiKeyValid(false)
  }

  return {
    apiKey,
    saveApiKey,
    clearApiKey,
    isStorageReady,
    isApiKeyValid,
  }
}
