# CapMeToo API Documentation

## Overview
CapMeToo uses the Google Gemini 2.0 Flash API for AI-powered caption generation with multi-language support.

## Authentication
All API requests require a valid Google AI API key passed as a query parameter.

\`\`\`
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=YOUR_API_KEY
\`\`\`

## Caption Generation

### Endpoint
`POST /v1beta/models/gemini-2.0-flash-exp:generateContent`

### Request Format
\`\`\`json
{
  "contents": [
    {
      "parts": [
        {
          "text": "Create a funny social media caption for this image in English..."
        },
        {
          "inline_data": {
            "mime_type": "image/jpeg",
            "data": "base64_encoded_image_data"
          }
        }
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0.7,
    "topK": 40,
    "topP": 0.95,
    "maxOutputTokens": 200
  }
}
\`\`\`

### Response Format
\`\`\`json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Generated caption with emojis and hashtags..."
          }
        ]
      }
    }
  ]
}
\`\`\`

## Supported Languages
- English (en) 🇺🇸
- Bulgarian (bg) 🇧🇬
- German (de) 🇩🇪
- Spanish (es) 🇪🇸
- French (fr) 🇫🇷
- Portuguese (pt) 🇵🇹
- Chinese (zh) 🇨🇳
- Hindi (hi) 🇮🇳

## Caption Topics
1. **Funny** - Humorous and entertaining content
2. **General** - Versatile captions for any occasion
3. **Travel** - Adventure and wanderlust focused
4. **Food** - Appetizing and delicious descriptions
5. **Fitness** - Motivational health and wellness
6. **Lifestyle** - Aspirational daily life content
7. **Business** - Professional and growth-minded
8. **Nature** - Environmental and peaceful vibes
9. **Fashion** - Style and trend-focused content

## Error Handling
The API includes comprehensive error handling for:
- Invalid API keys
- Network connectivity issues
- Rate limiting
- Malformed requests
- Unsupported image formats

## Rate Limits
- Free tier: 60 requests per minute
- Paid tier: Higher limits available
- Image size limit: 4MB maximum
- Supported formats: JPEG, PNG, GIF, WebP
