"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { topics, languages } from "@/utils/constants"

interface TopicLanguageSelectorProps {
  selectedTopic: string
  onTopicChange: (topic: string) => void
  selectedLanguage: string
  onLanguageChange: (language: string) => void
}

/**
 * Streamlined topic and language selector with dropdowns
 * Features:
 * - Two clean dropdown menus
 * - Default selections (Funny topic, English language)
 * - Responsive design
 * - Smooth animations
 * - No borders, floating design
 */
export function TopicLanguageSelector({
  selectedTopic,
  onTopicChange,
  selectedLanguage,
  onLanguageChange,
}: TopicLanguageSelectorProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Choose Your Style & Language</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
        {/* Topic Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Caption Style</label>
          <Select value={selectedTopic} onValueChange={onTopicChange}>
            <SelectTrigger className="shadow-floating no-border bg-background/50 backdrop-blur-sm">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent className="shadow-floating no-border bg-background/95 backdrop-blur-xl">
              {topics.map((topic) => (
                <SelectItem key={topic.id} value={topic.id} className="hover:bg-accent/50">
                  <span className="flex items-center">
                    <span className="mr-2">{topic.emoji}</span>
                    {topic.label}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language Selector */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Language</label>
          <Select value={selectedLanguage} onValueChange={onLanguageChange}>
            <SelectTrigger className="shadow-floating no-border bg-background/50 backdrop-blur-sm">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent className="shadow-floating no-border bg-background/95 backdrop-blur-xl">
              {languages.map((language) => (
                <SelectItem key={language.code} value={language.code} className="hover:bg-accent/50">
                  <span className="flex items-center">
                    <span className="mr-2">{language.flag}</span>
                    {language.name}
                  </span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
