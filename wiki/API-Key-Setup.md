# 🔑 API Key Setup Guide

This guide will walk you through getting and configuring your Google AI API key for CapMeToo.

## 🎯 Why Do I Need an API Key?

CapMeToo uses Google's Gemini 2.0 Flash API to generate intelligent captions. The API key:

- 🆓 **Is completely free** for personal use
- 🔒 **Stays on your device** - never shared with anyone
- ⚡ **Enables AI-powered** caption generation
- 🌍 **Supports multiple languages** natively

---

## 📋 Step-by-Step Setup

### Step 1: Get Your Google AI API Key

1. **Visit Google AI Studio**

   - Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

2. **Sign In**

   - Use your Google account to sign in
   - If you don't have one, create a free Google account

3. **Create API Key**

   - Click **"Create API Key"**
   - Choose **"Create API key in new project"** (recommended)
   - Your API key will be generated instantly

4. **Copy Your Key**
   - Click the **copy button** (📋) next to your API key
   - Store it safely - you'll need it for CapMeToo

> **⚠️ Important**: Keep your API key secure and never share it publicly!

### Step 2: Configure CapMeToo

1. **Open CapMeToo**

   - Visit [CapMeToo](https://YOUR-USERNAME.github.io/capmetoo)
   - You'll see the API key setup screen

2. **Enter Your API Key**

   - Paste your API key in the input field
   - Click the eye icon (👁️) to verify it's correct
   - Click **"Start Using CapMeToo"**

3. **Verification**
   - CapMeToo will validate your API key
   - If valid, you'll be taken to the main app
   - If invalid, you'll see an error message

---

## 🔧 Managing Your API Key

### Updating Your API Key

1. **Open the Menu**

   - Click the hamburger menu (☰) in the top-right corner

2. **API Key Section**
   - Find the "API Key" section in the sidebar
   - Enter your new API key
   - Click **"Update Key"**

### Checking API Key Status

Your current API key status is shown in the menu:

- **Current**: `AIza****...****xyz` (masked for security)
- **Status**: ✅ Valid / ❌ Invalid

---

## 🔒 Security & Privacy

### How We Protect Your API Key

- 🏠 **Local Storage Only** - Stored on your device, never sent to our servers
- 🔐 **Encrypted Communication** - All API calls use HTTPS encryption
- 👁️ **No Tracking** - We don't monitor your API usage
- 🗑️ **Easy Removal** - Delete anytime from the menu

### Best Practices

1. **Don't Share Your Key**

   - Never post your API key online
   - Don't share it in screenshots
   - Keep it private and secure

2. **Monitor Usage**

   - Check your usage in [Google AI Studio](https://aistudio.google.com/)
   - Set up usage alerts if needed

3. **Regenerate if Compromised**
   - If you accidentally share your key, regenerate it immediately
   - Update CapMeToo with the new key

---

## 💰 API Pricing & Limits

### Free Tier Limits

Google AI provides generous free limits:

- **60 requests per minute**
- **1,500 requests per day**
- **1 million tokens per month**

> **💡 Tip**: Each caption generation typically uses 1 request and ~100-200 tokens.

### Usage Monitoring

Monitor your usage at:

- [Google AI Studio Dashboard](https://aistudio.google.com/)
- View daily/monthly usage statistics
- Set up alerts for high usage

### If You Exceed Limits

- **Rate Limiting**: Wait a minute and try again
- **Daily Limit**: Wait until the next day (resets at midnight UTC)
- **Monthly Limit**: Consider upgrading to a paid plan

---

## 🚨 Troubleshooting

### Common Issues

#### "Invalid API Key" Error

**Possible Causes:**

- API key copied incorrectly
- Extra spaces in the key
- Key has been revoked

**Solutions:**

1. Double-check the API key for typos
2. Copy the key again from Google AI Studio
3. Generate a new API key if needed

#### "API Request Failed" Error

**Possible Causes:**

- Network connectivity issues
- API rate limits exceeded
- Temporary Google AI service issues

**Solutions:**

1. Check your internet connection
2. Wait a minute and try again
3. Check [Google AI Status](https://status.cloud.google.com/)

#### "Quota Exceeded" Error

**Possible Causes:**

- Daily or monthly limits reached
- Too many requests in a short time

**Solutions:**

1. Wait for quota reset (daily: midnight UTC)
2. Reduce request frequency
3. Consider upgrading your Google AI plan

### Getting Help

If you're still having issues:

- 🐛 **Report Bug**: [Create an issue](https://github.com/YOUR-USERNAME/capmetoo/issues/new?template=bug_report.md)
- ❓ **Ask Question**: [GitHub Discussions](https://github.com/YOUR-USERNAME/capmetoo/discussions)
- 📖 **Check FAQ**: [Frequently Asked Questions](FAQ)

---

## 🔄 API Key Migration

### From Other AI Services

If you're migrating from other AI caption services:

1. **Get Google AI API Key** (follow steps above)
2. **Update CapMeToo** with new key
3. **Test Generation** with a sample image
4. **Enjoy Better Results** with Gemini 2.0 Flash!

### Backup Your Settings

Before changing API keys:

1. Note your current caption style preferences
2. Save any favorite generated captions
3. Export any custom settings (if applicable)

---

## 🎓 Advanced Configuration

### Multiple API Keys

For developers or heavy users:

1. **Create Multiple Projects** in Google AI Studio
2. **Generate Separate Keys** for different environments
3. **Switch Keys** in CapMeToo as needed

### API Key Environment Variables

For local development:

\`\`\`bash

# .env.local (optional - for development only)

NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
\`\`\`

> **⚠️ Warning**: Never commit API keys to version control!

---

## 🛡️ Deployment Notes

- All icons and static assets (favicon.ico, icon.svg, PWA icons) must be in the `/Cap-Me-Too/` subfolder for GitHub Pages deployment.
- Do not place deployment icons in the root or public/ folders.
- Example: `https://username.github.io/Cap-Me-Too/favicon.ico` is served from `out/Cap-Me-Too/favicon.ico`.

---

## ⏭️ Next Steps

Once your API key is configured:

1. **[Take your first steps](First-Steps)** - Generate your first caption
2. **[Explore caption styles](Caption-Styles-Guide)** - Try all 9 styles
3. **[Try different languages](Multi-Language-Support)** - Generate in 8 languages
4. **[Install as PWA](PWA-Installation)** - Use like a native app

---

<div align="center">
  <p><strong>🎉 API Key Setup Complete!</strong></p>
  <p>Ready to generate amazing captions? <a href="First-Steps">Let's create your first caption!</a></p>
</div>
