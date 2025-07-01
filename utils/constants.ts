/**
 * Application constants for topics and languages
 * Features:
 * - 9 total topics with Funny as default
 * - 8 widely spoken languages
 * - Emoji flags for visual appeal
 * - Organized data structure
 */

export const topics = [
  { id: "funny", label: "Funny", emoji: "😂" },
  { id: "general", label: "General", emoji: "✨" },
  { id: "travel", label: "Travel", emoji: "✈️" },
  { id: "food", label: "Food", emoji: "🍕" },
  { id: "fitness", label: "Fitness", emoji: "💪" },
  { id: "lifestyle", label: "Lifestyle", emoji: "🌟" },
  { id: "business", label: "Business", emoji: "💼" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "fashion", label: "Fashion", emoji: "👗" },
]

export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "bg", name: "Bulgarian", flag: "🇧🇬" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
]
