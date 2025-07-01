/**
 * API key validation utility
 * Features:
 * - Validates Google AI API keys
 * - Handles network errors gracefully
 * - Returns boolean for easy checking
 * - Lightweight validation request
 */

export async function validateApiKey(apiKey: string): Promise<boolean> {
  if (!apiKey || apiKey.length < 10) {
    return false
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    return response.ok
  } catch (error) {
    console.error("API key validation failed:", error)
    return false
  }
}
