class CapMeToo {
  constructor() {
    this.apiKey = localStorage.getItem("gemini_api_key")
    this.selectedTopic = "general"
    this.currentImage = null
    this.currentImageData = null

    this.init()
  }

  init() {
    this.bindEvents()
    this.checkApiKey()
  }

  bindEvents() {
    // API Key Setup
    document.getElementById("apiKeyInput").addEventListener("input", this.validateApiKey.bind(this))
    document.getElementById("toggleApiKey").addEventListener("click", this.toggleApiKeyVisibility.bind(this))
    document.getElementById("saveApiKey").addEventListener("click", this.saveApiKey.bind(this))

    // Main App
    document.getElementById("uploadArea").addEventListener("click", () => {
      document.getElementById("imageInput").click()
    })

    document.getElementById("uploadArea").addEventListener("dragover", this.handleDragOver.bind(this))
    document.getElementById("uploadArea").addEventListener("drop", this.handleDrop.bind(this))
    document.getElementById("imageInput").addEventListener("change", this.handleImageSelect.bind(this))
    document.getElementById("removeImage").addEventListener("click", this.removeImage.bind(this))

    // Topic Selection
    document.querySelectorAll(".topic-btn").forEach((btn) => {
      btn.addEventListener("click", this.selectTopic.bind(this))
    })

    // Generate Caption
    document.getElementById("generateBtn").addEventListener("click", this.generateCaption.bind(this))

    // Modal Controls
    document.getElementById("closeModal").addEventListener("click", this.closeModal.bind(this))
    document.getElementById("refreshCaption").addEventListener("click", this.generateCaption.bind(this))
    document.getElementById("copyCaption").addEventListener("click", this.copyCaption.bind(this))

    // Settings
    document.getElementById("settingsBtn").addEventListener("click", this.openSettings.bind(this))
    document.getElementById("closeSettings").addEventListener("click", this.closeSettings.bind(this))
    document.getElementById("toggleNewApiKey").addEventListener("click", this.toggleNewApiKeyVisibility.bind(this))
    document.getElementById("updateApiKey").addEventListener("click", this.updateApiKey.bind(this))

    // Close modals on backdrop click
    document.getElementById("captionModal").addEventListener("click", (e) => {
      if (e.target.id === "captionModal") this.closeModal()
    })

    document.getElementById("settingsModal").addEventListener("click", (e) => {
      if (e.target.id === "settingsModal") this.closeSettings()
    })
  }

  checkApiKey() {
    if (this.apiKey) {
      this.showMainApp()
    } else {
      this.showApiKeySetup()
    }
  }

  showApiKeySetup() {
    document.getElementById("apiKeySetup").classList.remove("hidden")
    document.getElementById("mainApp").classList.add("hidden")
  }

  showMainApp() {
    document.getElementById("apiKeySetup").classList.add("hidden")
    document.getElementById("mainApp").classList.remove("hidden")
  }

  validateApiKey() {
    const input = document.getElementById("apiKeyInput")
    const saveBtn = document.getElementById("saveApiKey")

    if (input.value.trim().length > 10) {
      saveBtn.disabled = false
    } else {
      saveBtn.disabled = true
    }
  }

  toggleApiKeyVisibility() {
    const input = document.getElementById("apiKeyInput")
    const btn = document.getElementById("toggleApiKey")

    if (input.type === "password") {
      input.type = "text"
      btn.textContent = "🙈"
    } else {
      input.type = "password"
      btn.textContent = "👁️"
    }
  }

  toggleNewApiKeyVisibility() {
    const input = document.getElementById("newApiKey")
    const btn = document.getElementById("toggleNewApiKey")

    if (input.type === "password") {
      input.type = "text"
      btn.textContent = "🙈"
    } else {
      input.type = "password"
      btn.textContent = "👁️"
    }
  }

  saveApiKey() {
    const apiKey = document.getElementById("apiKeyInput").value.trim()
    if (apiKey) {
      localStorage.setItem("gemini_api_key", apiKey)
      this.apiKey = apiKey
      this.showMainApp()
    }
  }

  updateApiKey() {
    const apiKey = document.getElementById("newApiKey").value.trim()
    if (apiKey) {
      localStorage.setItem("gemini_api_key", apiKey)
      this.apiKey = apiKey
      this.closeSettings()
      this.showNotification("API key updated successfully!", "success")
    }
  }

  handleDragOver(e) {
    e.preventDefault()
    document.getElementById("uploadArea").classList.add("dragover")
  }

  handleDrop(e) {
    e.preventDefault()
    document.getElementById("uploadArea").classList.remove("dragover")

    const files = e.dataTransfer.files
    if (files.length > 0 && files[0].type.startsWith("image/")) {
      this.processImage(files[0])
    }
  }

  handleImageSelect(e) {
    const file = e.target.files[0]
    if (file && file.type.startsWith("image/")) {
      this.processImage(file)
    }
  }

  async processImage(file) {
    try {
      // Resize image to meet Gemini's requirements (max 4MB)
      const resizedImage = await this.resizeImage(file, 4 * 1024 * 1024) // 4MB

      // Show preview
      const reader = new FileReader()
      reader.onload = (e) => {
        document.getElementById("previewImg").src = e.target.result
        document.getElementById("uploadArea").classList.add("hidden")
        document.getElementById("imagePreview").classList.remove("hidden")
        document.getElementById("generateBtn").disabled = false
      }
      reader.readAsDataURL(resizedImage)

      // Store image data for API call
      this.currentImage = resizedImage
      this.currentImageData = await this.fileToBase64(resizedImage)
    } catch (error) {
      console.error("Error processing image:", error)
      this.showNotification("Error processing image. Please try again.", "error")
    }
  }

  async resizeImage(file, maxSize) {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new Image()

      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img
        const maxDimension = 1024 // Max dimension for Gemini

        if (width > height) {
          if (width > maxDimension) {
            height = (height * maxDimension) / width
            width = maxDimension
          }
        } else {
          if (height > maxDimension) {
            width = (width * maxDimension) / height
            height = maxDimension
          }
        }

        canvas.width = width
        canvas.height = height

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height)

        canvas.toBlob(
          (blob) => {
            if (blob.size <= maxSize) {
              resolve(blob)
            } else {
              // Further compress if still too large
              canvas.toBlob(
                (compressedBlob) => {
                  resolve(compressedBlob)
                },
                "image/jpeg",
                0.7,
              )
            }
          },
          "image/jpeg",
          0.9,
        )
      }

      img.src = URL.createObjectURL(file)
    })
  }

  async fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const base64 = reader.result.split(",")[1]
        resolve(base64)
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  removeImage() {
    document.getElementById("uploadArea").classList.remove("hidden")
    document.getElementById("imagePreview").classList.add("hidden")
    document.getElementById("generateBtn").disabled = true
    document.getElementById("imageInput").value = ""
    this.currentImage = null
    this.currentImageData = null
  }

  selectTopic(e) {
    document.querySelectorAll(".topic-btn").forEach((btn) => btn.classList.remove("active"))
    e.target.classList.add("active")
    this.selectedTopic = e.target.dataset.topic
  }

  async generateCaption() {
    if (!this.currentImageData) return

    const generateBtn = document.getElementById("generateBtn")
    const btnText = generateBtn.querySelector(".btn-text")
    const btnLoader = generateBtn.querySelector(".btn-loader")

    // Show loading state
    generateBtn.disabled = true
    btnText.classList.add("hidden")
    btnLoader.classList.remove("hidden")

    try {
      const caption = await this.callGeminiAPI()
      this.showCaptionModal(caption)
    } catch (error) {
      console.error("Error generating caption:", error)
      this.showNotification("Error generating caption. Please check your API key and try again.", "error")
    } finally {
      // Reset button state
      generateBtn.disabled = false
      btnText.classList.remove("hidden")
      btnLoader.classList.add("hidden")
    }
  }

  async callGeminiAPI() {
    const topicPrompts = {
      general: "Create an engaging and creative social media caption for this image. Make it catchy and relatable.",
      travel:
        "Create a travel-focused social media caption for this image. Include wanderlust vibes and travel inspiration.",
      food: "Create a food-focused social media caption for this image. Make it appetizing and mouth-watering.",
      fitness:
        "Create a fitness and health-focused social media caption for this image. Include motivation and wellness vibes.",
      lifestyle: "Create a lifestyle-focused social media caption for this image. Make it aspirational and relatable.",
      business:
        "Create a professional and business-focused social media caption for this image. Keep it polished and engaging.",
      nature:
        "Create a nature and outdoor-focused social media caption for this image. Include environmental appreciation.",
      fashion: "Create a fashion and style-focused social media caption for this image. Make it trendy and stylish.",
    }

    const prompt =
      topicPrompts[this.selectedTopic] + " Include relevant hashtags and emojis. Keep it under 280 characters."

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${this.apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: prompt },
                {
                  inline_data: {
                    mime_type: "image/jpeg",
                    data: this.currentImageData,
                  },
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
  }

  showCaptionModal(caption) {
    document.getElementById("captionResult").textContent = caption
    document.getElementById("captionModal").classList.remove("hidden")
  }

  closeModal() {
    document.getElementById("captionModal").classList.add("hidden")
  }

  openSettings() {
    document.getElementById("newApiKey").value = ""
    document.getElementById("settingsModal").classList.remove("hidden")
  }

  closeSettings() {
    document.getElementById("settingsModal").classList.add("hidden")
  }

  async copyCaption() {
    const caption = document.getElementById("captionResult").textContent
    try {
      await navigator.clipboard.writeText(caption)
      this.showNotification("Caption copied to clipboard!", "success")
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea")
      textArea.value = caption
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      this.showNotification("Caption copied to clipboard!", "success")
    }
  }

  showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `notification notification-${type}`
    notification.textContent = message

    // Add styles
    Object.assign(notification.style, {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "12px 20px",
      borderRadius: "8px",
      color: "white",
      fontWeight: "500",
      zIndex: "10000",
      transform: "translateX(100%)",
      transition: "transform 0.3s ease",
      backgroundColor: type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#6366f1",
    })

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }
}

// Initialize app when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new CapMeToo()
})

// Register service worker for PWA
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}
