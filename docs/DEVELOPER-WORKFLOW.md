# 🛠️ CapMeToo Developer Workflow & Architecture Guide

**The Complete Developer's Bible for CapMeToo**

This document contains everything you need to know about working with the CapMeToo codebase, from architecture decisions to deployment processes. Whether you're returning to this project after years or onboarding a new AI agent, this guide will get you up to speed quickly.

---

## 📋 Table of Contents

1. [Project Overview](#-project-overview)
2. [Architecture & Design Decisions](#-architecture--design-decisions)
3. [Technology Stack](#-technology-stack)
4. [Project Structure](#-project-structure)
5. [Development Workflow](#-development-workflow)
6. [Code Standards & Patterns](#-code-standards--patterns)
7. [Component Architecture](#-component-architecture)
8. [State Management](#-state-management)
9. [API Integration](#-api-integration)
10. [Styling System](#-styling-system)
11. [Build & Deployment](#-build--deployment)
12. [GitHub Repository Setup](#-github-repository-setup)
13. [Automation & CI/CD](#-automation--cicd)
14. [Performance Optimizations](#-performance-optimizations)
15. [Security Considerations](#-security-considerations)
16. [Troubleshooting](#-troubleshooting)
17. [Future Development](#-future-development)

---

## 🎯 Project Overview

### What is CapMeToo?

CapMeToo is a **Progressive Web App (PWA)** that generates AI-powered social media captions from photos using Google's Gemini 2.0 Flash API. It supports **9 caption styles** and **8 languages** with a modern, responsive design.

### Core Philosophy

- **Privacy First**: All data stays on user's device
- **Performance Focused**: Fast, responsive, optimized
- **Mobile First**: Designed for mobile, enhanced for desktop
- **Accessibility**: WCAG compliant, keyboard navigable
- **Open Source**: MIT licensed, community-driven

### Key Features

- 🤖 AI-powered caption generation (Google Gemini 2.0 Flash)
- 🎨 9 caption styles (Funny, General, Travel, Food, Fitness, Lifestyle, Business, Nature, Fashion)
- 🌍 8 language support (EN, BG, DE, ES, FR, PT, ZH, HI)
- 📱 Progressive Web App with offline capabilities
- 🎨 Modern glass morphism UI with dark/light themes
- 🔒 Local storage for API keys and preferences
- 📊 Performance optimized for GitHub Pages

---

## 🏗️ Architecture & Design Decisions

### Framework Choice: Next.js 14 with App Router

**Why Next.js?**

- **Static Export**: Perfect for GitHub Pages hosting
- **App Router**: Modern file-based routing
- **Performance**: Built-in optimizations
- **TypeScript**: First-class TypeScript support
- **SEO**: Server-side rendering capabilities

### Deployment Strategy: Static Export to GitHub Pages

**Why GitHub Pages?**

- **Free hosting**: No cost for open source projects
- **Automatic deployment**: GitHub Actions integration
- **Custom domains**: Support for custom domains
- **CDN**: Global content delivery
- **Reliability**: GitHub's infrastructure

### State Management: React Hooks + Local Storage

**Why this approach?**

- **Simplicity**: No complex state management needed
- **Performance**: Minimal overhead
- **Privacy**: Data stays on device
- **Persistence**: Survives browser restarts

### Styling: Tailwind CSS + Custom Design System

**Why Tailwind?**

- **Utility-first**: Rapid development
- **Consistency**: Design system built-in
- **Performance**: Purged CSS, small bundle
- **Customization**: Easy theming and variants

---

## 🛠️ Technology Stack

### Core Technologies

\`\`\`json
{
"framework": "Next.js 14",
"language": "TypeScript 5.2+",
"styling": "Tailwind CSS 3.3+",
"ui_components": "Radix UI + Custom",
"icons": "Lucide React",
"fonts": "Poppins + Inter (Google Fonts)",
"ai_api": "Google Gemini 2.0 Flash",
"deployment": "GitHub Pages",
"ci_cd": "GitHub Actions"
}
\`\`\`

### Development Tools

\`\`\`json
{
"package_manager": "npm",
"linting": "ESLint + Next.js config",
"formatting": "Prettier (via ESLint)",
"type_checking": "TypeScript strict mode",
"git_hooks": "Husky + lint-staged",
"ide_config": "VS Code settings included"
}
\`\`\`

### Build Tools

\`\`\`json
{
"bundler": "Next.js (Webpack + SWC)",
"minification": "SWC minifier",
"optimization": "Package import optimization",
"output": "Static export for GitHub Pages",
"compression": "Built-in gzip compression"
}
\`\`\`

---

## 📁 Project Structure

### Root Directory

\`\`\`
capmetoo/
├── .github/ # GitHub-specific files
│ ├── workflows/ # GitHub Actions (CI/CD)
│ ├── ISSUE_TEMPLATE/ # Issue templates
│ ├── pull_request_template.md
│ └── FUNDING.yml # Sponsorship info
├── .vscode/ # VS Code configuration
├── app/ # Next.js App Router
├── components/ # React components
├── hooks/ # Custom React hooks
├── utils/ # Utility functions
├── public/ # Static assets
├── docs/ # Documentation
├── wiki/ # Wiki content (for GitHub Wiki)
├── scripts/ # Setup and utility scripts
└── [config files] # Various config files
\`\`\`

### App Directory (Next.js App Router)

\`\`\`
app/
├── layout.tsx # Root layout with providers
├── page.tsx # Main application page
├── loading.tsx # Global loading component
├── error.tsx # Error boundary
├── not-found.tsx # 404 page
├── global-error.tsx # Global error boundary
└── globals.css # Global styles and CSS variables
\`\`\`

### Components Architecture

\`\`\`
components/
├── app/ # App-specific components
│ ├── image-upload.tsx # Image upload with drag & drop
│ ├── topic-language-selector.tsx # Style & language selection
│ ├── generate-button.tsx # Caption generation button
│ └── main-app.tsx # Main app container
├── layout/ # Layout components
│ ├── header.tsx # Fixed header with navigation
│ └── footer.tsx # Footer with links
├── modals/ # Modal components
│ ├── caption-modal.tsx # Caption display modal
│ └── settings-modal.tsx # Settings configuration
├── setup/ # Setup flow components
│ └── api-key-setup.tsx # API key configuration
├── ui/ # Reusable UI components
│ ├── button.tsx # Button variants
│ ├── card.tsx # Card component
│ ├── input.tsx # Input component
│ ├── select.tsx # Select dropdown
│ ├── theme-toggle.tsx # Dark/light theme toggle
│ ├── logo.tsx # Custom SVG logo
│ ├── blur-overlay.tsx # Modal backdrop
│ ├── hamburger-menu.tsx # Mobile menu
│ ├── sidebar-menu.tsx # Sidebar navigation
│ └── [other ui components]
└── providers/ # React context providers
└── app-providers.tsx # Theme + Error boundary
\`\`\`

### Hooks Directory

\`\`\`
hooks/
├── use-caption.ts # Caption generation logic
├── use-storage.ts # Local storage management
└── use-media-query.ts # Responsive breakpoints
\`\`\`

### Utils Directory

\`\`\`
utils/
├── constants.ts # App constants (topics, languages)
├── caption-generator.ts # AI caption generation
└── api-validation.ts # API key validation
\`\`\`

---

## 🔄 Development Workflow

### 1. Initial Setup

\`\`\`bash

# Clone repository

git clone https://github.com/YOUR-USERNAME/capmetoo.git
cd capmetoo

# Install dependencies

npm install

# Start development server

npm run dev

# Open http://localhost:3000

\`\`\`

### 2. Development Commands

\`\`\`bash

# Development

npm run dev # Start dev server with hot reload
npm run build # Build for production
npm run start # Start production server locally

# Code Quality

npm run lint # Run ESLint with auto-fix
npm run lint:check # Check linting without fixing
npm run type-check # Run TypeScript type checking

# Deployment

npm run deploy # Build and deploy to GitHub Pages
\`\`\`

### 3. Git Workflow

\`\`\`bash

# Feature development

git checkout -b feature/new-feature

# Make changes

git add .
git commit -m "✨ Add new feature"
git push origin feature/new-feature

# Create pull request

# Hotfix

git checkout -b hotfix/fix-issue

# Make changes

git add .
git commit -m "🐛 Fix critical issue"
git push origin hotfix/fix-issue

# Create pull request to main

\`\`\`

### 4. Commit Message Convention

\`\`\`
🎉 Initial commit
✨ Add new feature
🐛 Fix bug
📝 Update documentation
🎨 Improve UI/styling
⚡ Improve performance
🔧 Update configuration
🚀 Deploy changes
♻️ Refactor code
🔒 Security improvements
🌍 Internationalization
📱 Mobile improvements
\`\`\`

---

## 📐 Code Standards & Patterns

### TypeScript Configuration

\`\`\`json
// tsconfig.json - Strict TypeScript setup
{
"compilerOptions": {
"strict": true,
"noEmit": true,
"esModuleInterop": true,
"moduleResolution": "bundler",
"jsx": "preserve",
"baseUrl": ".",
"paths": {
"@/_": ["./_"]
}
}
}
\`\`\`

### ESLint Configuration

\`\`\`json
// .eslintrc.json - Next.js + custom rules
{
"extends": ["next/core-web-vitals"],
"rules": {
"react/no-unescaped-entities": "off",
"@next/next/no-page-custom-font": "off",
"react-hooks/exhaustive-deps": "warn",
"@typescript-eslint/no-unused-vars": "warn",
"no-console": ["warn", { "allow": ["warn", "error"] }]
}
}
\`\`\`

### Component Patterns

#### 1. Component Structure

\`\`\`typescript
// Standard component pattern
"use client" // Only if client-side features needed

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ComponentProps {
prop1: string
prop2?: number
onAction: (data: string) => void
}

/\*\*

- Component description
- Features:
- - Feature 1
- - Feature 2
- - Feature 3
    \*/
    export function ComponentName({ prop1, prop2 = 0, onAction }: ComponentProps) {
    const [state, setState] = useState("")

const handleAction = () => {
// Logic here
onAction(state)
}

return (

<div className="container-classes">
<Button onClick={handleAction}>
{prop1}
</Button>
</div>
)
}
\`\`\`

#### 2. Custom Hook Pattern

\`\`\`typescript
// Custom hook pattern
"use client"

import { useState, useEffect } from "react"

/\*\*

- Custom hook description
- Features:
- - Feature 1
- - Feature 2
    \*/
    export function useCustomHook(initialValue: string) {
    const [value, setValue] = useState(initialValue)
    const [loading, setLoading] = useState(false)

useEffect(() => {
// Effect logic
}, [value])

const updateValue = (newValue: string) => {
setLoading(true)
setValue(newValue)
setLoading(false)
}

return {
value,
loading,
updateValue,
}
}
\`\`\`

#### 3. Utility Function Pattern

\`\`\`typescript
// Utility function pattern
interface FunctionOptions {
option1: string
option2?: boolean
}

/\*\*

- Utility function description
- @param input - Input description
- @param options - Options description
- @returns Return value description
  \*/
  export function utilityFunction(
  input: string,
  options: FunctionOptions
  ): Promise<string> {
  // Implementation
  return Promise.resolve(input)
  }
  \`\`\`

---

## 🎨 Component Architecture

### Design System Hierarchy

#### 1. Base UI Components (`components/ui/`)

- **Purpose**: Reusable, unstyled components
- **Examples**: Button, Input, Card, Select
- **Styling**: Tailwind classes with variants
- **Dependencies**: Radix UI primitives

#### 2. Layout Components (`components/layout/`)

- **Purpose**: Page structure and navigation
- **Examples**: Header, Footer, Sidebar
- **Styling**: Responsive, theme-aware
- **Dependencies**: UI components

#### 3. App Components (`components/app/`)

- **Purpose**: Feature-specific components
- **Examples**: ImageUpload, TopicSelector, GenerateButton
- **Styling**: App-specific styling
- **Dependencies**: UI + Layout components

#### 4. Modal Components (`components/modals/`)

- **Purpose**: Overlay interfaces
- **Examples**: CaptionModal, SettingsModal
- **Styling**: Backdrop blur, floating cards
- **Dependencies**: UI components + BlurOverlay

#### 5. Global Background Components

- **Purpose**: Site-wide visual effects
- **Examples**: AnimatedBackground (global blurred circles)
- **Styling**: CSS animations, theme-aware colors
- **Dependencies**: Rendered in root layout, no component dependencies
- **Note**: The AnimatedBackground is rendered globally in `app/layout.tsx` to ensure consistency across all pages. Do not add it to individual screens to avoid duplication.

### Component Communication Patterns

#### 1. Props Down, Events Up

\`\`\`typescript
// Parent component
function Parent() {
const [data, setData] = useState("")

return (
<Child 
      value={data} 
      onChange={setData} 
    />
)
}

// Child component
function Child({ value, onChange }: Props) {
return (
<input
value={value}
onChange={(e) => onChange(e.target.value)}
/>
)
}
\`\`\`

#### 2. Custom Hooks for Logic

\`\`\`typescript
// Extract complex logic to custom hooks
function useCaption(apiKey: string) {
// All caption-related logic
return {
generateCaption,
caption,
isGenerating,
// ... other caption state
}
}

// Use in components
function CaptionGenerator() {
const { generateCaption, caption, isGenerating } = useCaption(apiKey)
// Component only handles UI
}
\`\`\`

#### 3. Context for Global State

\`\`\`typescript
// Only used for theme and error boundaries
function AppProviders({ children }: Props) {
return (
<ErrorBoundary>
<ThemeProvider>
{children}
</ThemeProvider>
</ErrorBoundary>
)
}
\`\`\`

---

## 🗄️ State Management

### Local State Strategy

We use **React hooks + Local Storage** instead of complex state management:

#### 1. Component State (useState)

\`\`\`typescript
// For UI state that doesn't need persistence
const [isOpen, setIsOpen] = useState(false)
const [loading, setLoading] = useState(false)
\`\`\`

#### 2. Custom Hooks for Business Logic

\`\`\`typescript
// For complex state with business logic
const useCaption = (apiKey: string) => {
const [currentImage, setCurrentImage] = useState<string | null>(null)
const [selectedTopic, setSelectedTopic] = useState("funny")
const [caption, setCaption] = useState("")

const generateCaption = async () => {
// Business logic here
}

return {
currentImage,
setCurrentImage,
selectedTopic,
setSelectedTopic,
caption,
generateCaption,
}
}
\`\`\`

#### 3. Local Storage for Persistence

\`\`\`typescript
// For data that needs to persist
const useStorage = () => {
const [apiKey, setApiKey] = useState("")

useEffect(() => {
const stored = localStorage.getItem("capmetoo_api_key")
if (stored) setApiKey(stored)
}, [])

const saveApiKey = (key: string) => {
localStorage.setItem("capmetoo_api_key", key)
setApiKey(key)
}

return { apiKey, saveApiKey }
}
\`\`\`

### State Flow Diagram

\`\`\`
User Action → Component Event → Custom Hook → API Call → State Update → UI Re-render
↓ ↑
Local Storage ←→ useStorage Hook ←→ Persistence ←→ Browser Storage
\`\`\`

---

## 🔌 API Integration

### Google Gemini 2.0 Flash Integration

#### 1. API Configuration

\`\`\`typescript
// utils/caption-generator.ts
const API_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent"

interface CaptionRequest {
imageData: string // Base64 encoded image
topic: string // Caption style
language: string // Target language
apiKey: string // User's API key
}
\`\`\`

#### 2. Request Format

\`\`\`typescript
const requestBody = {
contents: [{
parts: [
{ text: buildPrompt(topic, language) },
{
inline_data: {
mime_type: "image/jpeg",
data: base64ImageData
}
}
]
}],
generationConfig: {
temperature: 0.7, // Creativity level
topK: 40, // Token selection
topP: 0.95, // Nucleus sampling
maxOutputTokens: 200 // Response length
}
}
\`\`\`

#### 3. Error Handling

\`\`\`typescript
try {
const response = await fetch(`${API_ENDPOINT}?key=${apiKey}`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(requestBody)
})

if (!response.ok) {
throw new Error(`API request failed: ${response.status}`)
}

const data = await response.json()
return data.candidates[0].content.parts[0].text
} catch (error) {
console.error("Caption generation failed:", error)
return getFallbackCaption(topic, language)
}
\`\`\`

#### 4. Fallback System

\`\`\`typescript
// Fallback captions for offline/error scenarios
const fallbackCaptions = {
funny: {
en: ["😂 When life gives you lemons...", "🤪 Plot twist..."],
es: ["😂 Cuando la vida te da limones...", "🤪 Giro inesperado..."],
// ... other languages
},
// ... other topics
}
\`\`\`

### API Key Management

#### 1. Validation

\`\`\`typescript
export async function validateApiKey(apiKey: string): Promise<boolean> {
try {
const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
)
return response.ok
} catch {
return false
}
}
\`\`\`

#### 2. Storage

\`\`\`typescript
// Secure local storage
const saveApiKey = (apiKey: string) => {
localStorage.setItem("capmetoo_api_key", apiKey)
}

const getApiKey = (): string | null => {
return localStorage.getItem("capmetoo_api_key")
}
\`\`\`

---

## 🎨 Styling System

### Tailwind CSS Configuration

#### 1. Custom Design System

\`\`\`typescript
// tailwind.config.ts
const config = {
theme: {
extend: {
colors: {
// Custom color palette
primary: "hsl(var(--primary))",
secondary: "hsl(var(--secondary))",
// ... other colors
},
animation: {
// Custom animations
blob: "blob 7s infinite",
"accordion-down": "accordion-down 0.2s ease-out",
},
keyframes: {
blob: {
"0%": { transform: "translate(0px, 0px) scale(1)" },
"33%": { transform: "translate(30px, -50px) scale(1.1)" },
"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
"100%": { transform: "translate(0px, 0px) scale(1)" },
}
}
}
}
\`\`\`

#### 2. CSS Variables for Theming

\`\`\`css
/_ app/globals.css _/
:root {
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--primary: 262.1 83.3% 57.8%;
/_ ... other variables _/
}

.dark {
/_ ... _/
}

````

#### 3. Global Animated Background

The animated background is implemented as a global component rendered in the root layout:

```typescript
// app/layout.tsx
import { AnimatedBackground } from "@/components/ui/animated-background"

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        {/* Global animated background - rendered once for all pages */}
        <AnimatedBackground />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
````

**Implementation Details:**

- **Location**: `components/ui/animated-background.tsx`
- **Rendering**: Global in `app/layout.tsx` (not per-page)
- **Animation**: CSS-only blob animation with staggered delays
- **Theming**: Theme-aware colors (purple, pink, blue, yellow gradients)
- **Performance**: Hardware-accelerated transforms, minimal re-renders
- **Accessibility**: Purely decorative, no interaction required

**Key Features:**

- 3 animated gradient circles with different positions and timing
- 7-second infinite animation cycle with 2s and 4s delays
- Mix-blend-multiply for color interaction
- Blur effects for soft, modern appearance
- Responsive design that works on all screen sizes

**Best Practice:**

- Do NOT add the animated background to individual screens or modals. It is already present globally. If you need to hide it for a specific page, use CSS overrides.

### Component Styling Patterns

#### 1. Variant-Based Components

\`\`\`typescript
// Using class-variance-authority for variants
const buttonVariants = cva(
"inline-flex items-center justify-center rounded-md font-medium transition-colors",
{
variants: {
variant: {
default: "bg-primary text-primary-foreground hover:bg-primary/90",
outline: "border border-input hover:bg-accent",
ghost: "hover:bg-accent hover:text-accent-foreground",
},
size: {
default: "h-10 px-4 py-2",
sm: "h-9 rounded-md px-3",
lg: "h-11 rounded-md px-8",
},
},
defaultVariants: {
variant: "default",
size: "default",
},
}
)
\`\`\`

#### 2. Responsive Design Patterns

\`\`\`typescript
// Mobile-first responsive classes

<div className="
  grid grid-cols-1 gap-4
  md:grid-cols-2 md:gap-6
  lg:grid-cols-3 lg:gap-8
  xl:grid-cols-4
">
\`\`\`

#### 3. Theme-Aware Styling

\`\`\`typescript
// Components that adapt to theme

<div className="
  bg-background text-foreground
  border border-border
  shadow-lg dark:shadow-xl
">
\`\`\`

---

## 🚀 Build & Deployment

### Next.js Configuration

#### 1. Static Export Setup

\`\`\`javascript
// next.config.mjs
const nextConfig = {
output: 'export', // Static export for GitHub Pages
trailingSlash: true, // Required for GitHub Pages
skipTrailingSlashRedirect: true,
images: {
unoptimized: true // Disable image optimization for static export
},
experimental: {
optimizePackageImports: ['lucide-react'] // Optimize icon imports
},
swcMinify: true, // Use SWC for minification
poweredByHeader: false, // Remove X-Powered-By header
compress: true, // Enable gzip compression
productionBrowserSourceMaps: false // Disable source maps in production
}
\`\`\`

#### 2. Build Process

\`\`\`bash

# Development build

npm run dev

# → Starts development server with hot reload

# Production build

npm run build

# → Creates optimized static export in 'out' directory

# Local production test

npm run start

# → Serves production build locally

\`\`\`

#### 3. Build Optimization

- **Code Splitting**: Automatic with Next.js
- **Tree Shaking**: Removes unused code
- **Minification**: SWC minifier for smaller bundles
- **Image Optimization**: Disabled for static export
- **Package Optimization**: Optimized imports for lucide-react

### GitHub Pages Deployment

#### 1. Automatic Deployment

\`\`\`yaml

# .github/workflows/deploy.yml

name: 🚀 Deploy CapMeToo to GitHub Pages

on:
push:
branches: [ main ]
workflow_dispatch:

permissions:
contents: read
pages: write
id-token: write

jobs:
build:
runs-on: ubuntu-latest
steps: - name: 📥 Checkout
uses: actions/checkout@v4 - name: 🟢 Setup Node.js
uses: actions/setup-node@v4
with:
node-version: '18'
cache: 'npm' - name: 📦 Install dependencies
run: npm ci - name: 🏗️ Build with Next.js
run: npm run build - name: 📤 Upload artifact
uses: actions/upload-pages-artifact@v3
with:
path: ./out

deploy:
environment:
name: github-pages
url: ${{ steps.deployment.outputs.page_url }}
runs-on: ubuntu-latest
needs: build
steps: - name: 🚀 Deploy to GitHub Pages
uses: actions/deploy-pages@v4
\`\`\`

#### 2. Manual Deployment

\`\`\`bash

# Build and deploy manually

npm run build
npm run deploy # Uses gh-pages package
\`\`\`

### Environment Configuration

#### 1. Development Environment

\`\`\`bash

# .env.local (optional, for development)

NEXT_PUBLIC_GEMINI_API_KEY=your_dev_api_key_here
\`\`\`

#### 2. Production Environment

- **No environment variables needed** for production
- **API keys stored locally** in user's browser
- **No server-side secrets** required

---

## 📂 GitHub Repository Setup

### Repository Configuration

#### 1. Repository Settings

\`\`\`yaml

# Repository features to enable:

- ✅ Issues
- ✅ Projects
- ✅ Wiki
- ✅ GitHub Pages (Source: GitHub Actions)
- ✅ Actions (Read and write permissions)
  \`\`\`

#### 2. Branch Protection

\`\`\`yaml

# main branch protection:

- ✅ Require pull request reviews
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Include administrators
  \`\`\`

#### 3. Repository Topics

\`\`\`
ai, caption-generator, pwa, nextjs, typescript, tailwindcss,
social-media, gemini-api, github-pages, open-source
\`\`\`

### Issue Templates

#### 1. Bug Report Template

## \`\`\`markdown

name: 🐛 Bug Report
about: Create a report to help us improve CapMeToo
title: '[BUG] '
labels: 'bug, needs-triage'

---

## 🐛 Bug Description

[Clear description of the bug]

## 🔄 Steps to Reproduce

1. Go to '...'
2. Click on '...'
3. See error

## ✅ Expected Behavior

[What you expected to happen]

## 🌐 Environment

- Device: [e.g. iPhone 12, Desktop]
- OS: [e.g. iOS 15, Windows 11]
- Browser: [e.g. Chrome 120, Safari 17]
  \`\`\`

#### 2. Feature Request Template

## \`\`\`markdown

name: ✨ Feature Request
about: Suggest an idea for CapMeToo
title: '[FEATURE] '
labels: 'enhancement, needs-discussion'

---

## ✨ Feature Description

[Clear description of the feature]

## 🎯 Problem Statement

[What problem does this solve?]

## 💡 Proposed Solution

[How should this be implemented?]
\`\`\`

### Pull Request Template

\`\`\`markdown

## 📋 Pull Request Description

### 🎯 What does this PR do?

[Brief description of changes]

### 🔗 Related Issues

Fixes #(issue number)

### 🧪 Type of Change

- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 📖 Documentation update
- [ ] 🎨 Style/UI changes

### 🧪 Testing

- [ ] I have tested these changes locally
- [ ] I have tested on mobile devices
- [ ] All existing tests pass

### 🔍 Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have made corresponding changes to the documentation
      \`\`\`

---

## ⚙️ Automation & CI/CD

### GitHub Actions Workflows

#### 1. Deployment Workflow

\`\`\`yaml

# .github/workflows/deploy.yml

# Automatically deploys to GitHub Pages on push to main

# Includes: build, lint, type-check, deploy

\`\`\`

#### 2. CI Workflow

\`\`\`yaml

# .github/workflows/ci.yml

# Runs on pull requests

# Includes: lint, type-check, build verification

\`\`\`

#### 3. Workflow Features

- **Automatic deployment** on push to main
- **Pull request validation** with status checks
- **Build caching** for faster builds
- **Error reporting** with detailed logs
- **Security scanning** with GitHub's built-in tools

### Git Hooks

#### 1. Pre-commit Hooks (Husky + lint-staged)

\`\`\`json
// package.json
{
"lint-staged": {
"_.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
"_.{json,css,md}": ["prettier --write"]
}
}
\`\`\`

#### 2. Commit Message Validation

\`\`\`bash

# Enforces conventional commit format

# Examples: "✨ feat: add new feature", "🐛 fix: resolve issue"

\`\`\`

### Automated Quality Checks

#### 1. Code Quality

- **ESLint**: Code linting and formatting
- **TypeScript**: Type checking
- **Prettier**: Code formatting (via ESLint)

#### 2. Build Verification

- **Build success**: Ensures production build works
- **Type safety**: No TypeScript errors
- **Import validation**: All imports resolve correctly

#### 3. Security

- **Dependency scanning**: GitHub Dependabot
- **Secret scanning**: Prevents API key commits
- **Code scanning**: GitHub CodeQL analysis

---

## ⚡ Performance Optimizations

### Build Optimizations

#### 1. Bundle Optimization

\`\`\`javascript
// next.config.mjs optimizations
{
swcMinify: true, // Fast minification
compress: true, // Gzip compression
experimental: {
optimizePackageImports: ['lucide-react'] // Tree shake icons
}
}
\`\`\`

#### 2. Code Splitting

- **Automatic splitting**: Next.js handles automatically
- **Dynamic imports**: For heavy components
- **Route-based splitting**: Each page is separate bundle

#### 3. Asset Optimization

\`\`\`typescript
// Image optimization (disabled for static export)
// Font optimization with Google Fonts
// Icon optimization with Lucide React
\`\`\`

### Runtime Optimizations

#### 1. React Optimizations

\`\`\`typescript
// Memoization for expensive calculations
const memoizedValue = useMemo(() => {
return expensiveCalculation(data)
}, [data])

// Callback memoization for event handlers
const handleClick = useCallback(() => {
// Handler logic
}, [dependency])
\`\`\`

#### 2. State Management Optimizations

\`\`\`typescript
// Local state instead of global state
// Custom hooks for business logic
// Minimal re-renders with proper dependencies
\`\`\`

#### 3. API Optimizations

\`\`\`typescript
// Request deduplication
// Error handling with fallbacks
// Optimistic UI updates
\`\`\`

### Performance Monitoring

#### 1. Core Web Vitals

\`\`\`typescript
// Performance monitoring component (development only)
export function PerformanceMonitor() {
useEffect(() => {
if (process.env.NODE_ENV === "development") {
// Monitor LCP, FID, CLS
}
}, [])
}
\`\`\`

#### 2. Bundle Analysis

\`\`\`bash

# Analyze bundle size

ANALYZE=true npm run build
\`\`\`

---

## 🔒 Security Considerations

### Client-Side Security

#### 1. API Key Protection

\`\`\`typescript
// API keys stored in localStorage only
// Never committed to version control
// Validation before use
// Easy removal/rotation
\`\`\`

#### 2. Content Security Policy

\`\`\`typescript
// middleware.ts
const csp = `  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob:;
  connect-src 'self' https://generativelanguage.googleapis.com;`
\`\`\`

#### 3. Input Validation

\`\`\`typescript
// Image file validation
// API key format validation
// XSS prevention with proper escaping
\`\`\`

### Privacy Protection

#### 1. Data Handling

- **No server storage**: All data stays on device
- **No tracking**: No analytics or user tracking
- **No cookies**: Only localStorage for preferences
- **HTTPS only**: All API calls encrypted

#### 2. Image Processing

\`\`\`typescript
// Images processed locally
// Base64 encoding for API
// No image storage on servers
// Automatic cleanup after processing
\`\`\`

### Security Headers

#### 1. Middleware Security

\`\`\`typescript
// Security headers in middleware.ts
response.headers.set("X-Frame-Options", "DENY")
response.headers.set("X-Content-Type-Options", "nosniff")
response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
\`\`\`

#### 2. GitHub Pages Security

- **HTTPS enforced**: Automatic SSL certificates
- **DDoS protection**: GitHub's infrastructure
- **CDN security**: Global content delivery

---

## 🚨 Troubleshooting

### Common Development Issues

#### 1. Build Failures

\`\`\`bash

# Clear cache and rebuild

rm -rf .next node_modules package-lock.json
npm install
npm run build
\`\`\`

#### 2. Type Errors

\`\`\`bash

# Run type checking

npm run type-check

# Common fixes:

# - Add proper type annotations

# - Update @types packages

# - Check import paths

\`\`\`

#### 3. Linting Errors

\`\`\`bash

# Auto-fix linting issues

npm run lint

# Manual fixes for remaining issues

\`\`\`

### Deployment Issues

#### 1. GitHub Pages Not Updating

- Check Actions tab for deployment status
- Verify GitHub Pages source is "GitHub Actions"
- Ensure repository is public or you have GitHub Pro

#### 2. Build Fails in CI

- Check Node.js version (should be 18+)
- Verify all dependencies are in package.json
- Check for environment-specific issues

#### 3. API Issues

\`\`\`typescript
// Debug API calls
console.log("API Key valid:", await validateApiKey(apiKey))
console.log("Request payload:", requestBody)
console.log("Response:", response)
\`\`\`

### Performance Issues

#### 1. Slow Loading

- Check bundle size with analyzer
- Optimize images and assets
- Review component re-renders

#### 2. Memory Leaks

- Check useEffect cleanup
- Remove event listeners
- Clear timeouts/intervals

---

## 🔮 Future Development

### Planned Features

#### 1. Short-term (v1.1)

- **More languages**: Japanese, Korean, Italian, Russian, Arabic
- **Caption history**: Save and reuse previous captions
- **Batch processing**: Multiple images at once
- **Custom styles**: User-defined caption styles

#### 2. Medium-term (v1.2)

- **Social media integration**: Direct posting to platforms
- **Team collaboration**: Share API keys and captions
- **Analytics**: Caption performance tracking
- **Templates**: Pre-made caption templates

#### 3. Long-term (v2.0)

- **Video captions**: Support for video content
- **Voice input**: Generate captions from voice descriptions
- **AI training**: Custom AI models for specific brands
- **Enterprise features**: Advanced team management

### Technical Improvements

#### 1. Performance

- **Service Worker**: Better offline capabilities
- **Caching**: Intelligent caption caching
- **Lazy loading**: Optimize initial load time

#### 2. Developer Experience

- **Testing**: Unit and integration tests
- **Storybook**: Component documentation
- **E2E testing**: Automated user flow testing

#### 3. Architecture

- **Micro-frontends**: Modular architecture
- **Plugin system**: Extensible functionality
- **API abstraction**: Support multiple AI providers

### Contributing Guidelines

#### 1. Code Contributions

- Follow existing patterns and conventions
- Add TypeScript types for all new code
- Include JSDoc comments for complex functions
- Test on multiple browsers and devices

#### 2. Documentation

- Update this document for architectural changes
- Add examples for new features
- Keep README.md current
- Update wiki pages as needed

#### 3. Issue Management

- Use provided issue templates
- Add appropriate labels
- Link to related issues/PRs
- Provide clear reproduction steps

---

## 📚 Additional Resources

### Documentation

- **[README.md](../README.md)** - Project overview and quick start
- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[API Documentation](API.md)** - Technical API reference
- **[Deployment Guide](deployment.md)** - Deployment instructions

### External Resources

- **[Next.js Documentation](https://nextjs.org/docs)** - Framework documentation
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Styling framework
- **[Google AI Studio](https://aistudio.google.com/)** - API key management
- **[GitHub Pages](https://pages.github.com/)** - Hosting documentation

### Community

- **[GitHub Discussions](https://github.com/YOUR-USERNAME/capmetoo/discussions)** - Community discussions
- **[Issues](https://github.com/YOUR-USERNAME/capmetoo/issues)** - Bug reports and feature requests
- **[Wiki](https://github.com/YOUR-USERNAME/capmetoo/wiki)** - Comprehensive user documentation

---

## 🎯 Quick Reference

### Essential Commands

\`\`\`bash
npm run dev # Start development
npm run build # Build for production
npm run lint # Fix code issues
npm run type-check # Check TypeScript
npm run deploy # Deploy to GitHub Pages
\`\`\`

### Key Files

\`\`\`
next.config.mjs # Next.js configuration
tailwind.config.ts # Styling configuration
tsconfig.json # TypeScript configuration
package.json # Dependencies and scripts
.github/workflows/ # CI/CD automation
\`\`\`

### Important Patterns

- **Components**: Functional components with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State**: React hooks + local storage
- **API**: Google Gemini 2.0 Flash with fallbacks
- **Deployment**: Static export to GitHub Pages

---

<div align="center">
  <p><strong>🎉 You're now ready to work with CapMeToo!</strong></p>
  <p>This document is your complete guide to understanding and developing CapMeToo. Keep it updated as the project evolves!</p>
</div>
\`\`\`

Now let's push everything to GitHub and see the magic happen! 🚀

### Icon Updates

1. Update `/Cap-Me-Too/icon.svg` (main source)
2. Run icon generation script
3. Test build and deployment
4. Verify all icons display correctly

**Note:** All icons and static assets must be in the `/Cap-Me-Too/` subfolder for GitHub Pages deployment. Do not place deployment icons in the root or public/ folders.
