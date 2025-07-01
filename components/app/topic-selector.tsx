"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BlurOverlay } from "@/components/ui/blur-overlay"
import { useMediaQuery } from "@/hooks/use-media-query"

interface TopicSelectorProps {
  selectedTopic: string
  onTopicChange: (topic: string) => void
}

/**
 * Topic selector component with mobile drawer
 * Features:
 * - Desktop: Grid layout with all topics visible
 * - Mobile: Drawer with list view for better UX
 * - 9 total topics including funny as first
 * - Smooth animations and hover effects
 * - No borders, only shadows for floating effect
 */
export function TopicSelector({ selectedTopic, onTopicChange }: TopicSelectorProps) {
  const [showDrawer, setShowDrawer] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const topics = [
    { id: "funny", label: "😂 Funny", emoji: "😂" },
    { id: "general", label: "✨ General", emoji: "✨" },
    { id: "travel", label: "✈️ Travel", emoji: "✈️" },
    { id: "food", label: "🍕 Food", emoji: "🍕" },
    { id: "fitness", label: "💪 Fitness", emoji: "💪" },
    { id: "lifestyle", label: "🌟 Lifestyle", emoji: "🌟" },
    { id: "business", label: "💼 Business", emoji: "💼" },
    { id: "nature", label: "🌿 Nature", emoji: "🌿" },
    { id: "fashion", label: "👗 Fashion", emoji: "👗" },
  ]

  const selectedTopicData = topics.find((topic) => topic.id === selectedTopic)

  const handleTopicSelect = (topicId: string) => {
    onTopicChange(topicId)
    if (isMobile) {
      setShowDrawer(false)
    }
  }

  if (isMobile) {
    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center">Choose Your Style</h3>

        {/* Mobile Topic Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => setShowDrawer(true)}
            variant="outline"
            className="h-16 px-6 text-lg font-medium shadow-floating hover:shadow-floating-dark transition-all duration-300 hover:scale-105 no-border"
          >
            <span className="text-2xl mr-3">{selectedTopicData?.emoji}</span>
            {selectedTopicData?.label.split(" ")[1]}
            <span className="ml-2">▼</span>
          </Button>
        </div>

        {/* Mobile Drawer */}
        {showDrawer && (
          <BlurOverlay onClick={() => setShowDrawer(false)}>
            <Card
              className="w-full max-w-sm mx-4 mt-auto mb-8 shadow-floating no-border animate-in slide-in-from-bottom duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4 text-center">Select Style</h4>
                <div className="space-y-2">
                  {topics.map((topic) => (
                    <Button
                      key={topic.id}
                      variant={selectedTopic === topic.id ? "default" : "ghost"}
                      className={`w-full justify-start h-12 text-left transition-all duration-300 ${
                        selectedTopic === topic.id
                          ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg"
                          : "hover:bg-accent/50"
                      }`}
                      onClick={() => handleTopicSelect(topic.id)}
                    >
                      <span className="text-xl mr-3">{topic.emoji}</span>
                      {topic.label.split(" ")[1]}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </BlurOverlay>
        )}
      </div>
    )
  }

  // Desktop Grid View
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center">Choose Your Style</h3>
      <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {topics.map((topic) => (
          <Button
            key={topic.id}
            variant={selectedTopic === topic.id ? "default" : "outline"}
            className={`h-auto py-4 px-3 text-sm font-medium transition-all duration-300 hover:scale-105 shadow-floating no-border ${
              selectedTopic === topic.id
                ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg"
                : "hover:bg-accent/50 hover:shadow-floating-dark"
            }`}
            onClick={() => onTopicChange(topic.id)}
          >
            <span className="text-lg mr-2">{topic.emoji}</span>
            {topic.label.split(" ")[1]}
          </Button>
        ))}
      </div>
    </div>
  )
}
