interface CaptionRequest {
  imageData: string
  topic: string
  language: string
  apiKey: string
}

export async function generateCaptionWithAI({ imageData, topic, language, apiKey }: CaptionRequest): Promise<string> {
  const prompt = buildPrompt(topic, language)

  // Convert base64 image data to the format expected by Gemini
  const base64Data = imageData.split(",")[1]

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
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
                  data: base64Data,
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
    return getFallbackCaption(topic, language)
  }

  const data = await response.json()
  return data.candidates[0].content.parts[0].text
}

export function getFallbackCaption(topic: string, language: string): string {
  const fallbackCaptions: Record<string, Record<string, string[]>> = {
    funny: {
      en: [
        "😂 When life gives you lemons, take a selfie and make everyone wonder what you're up to! #funny #selfie #mood",
        "🤪 Plot twist: I'm actually an adult, but nobody told my sense of humor! #funny #adulting #jokes",
        "😆 Current mood: Pretending to be a responsible adult while secretly being a kid at heart! #funny #mood #life",
      ],
      bg: [
        "😂 Когато животът ти даде лимони, направи селфи и накарай всички да се чудят какво правиш! #смешно #селфи #настроение",
        "🤪 Обрат: Всъщност съм възрастен, но никой не каза на чувството ми за хумор! #смешно #възрастни #шеги",
        "😆 Текущо настроение: Преструвам се, че съм отговорен възрастен, докато тайно съм дете в сърцето си! #смешно #настроение #живот",
      ],
      de: [
        "😂 Wenn das Leben dir Zitronen gibt, mach ein Selfie und lasse alle rätseln, was du vorhast! #lustig #selfie #stimmung",
        "🤪 Plot Twist: Ich bin eigentlich erwachsen, aber niemand hat es meinem Humor gesagt! #lustig #erwachsensein #witze",
        "😆 Aktuelle Stimmung: Tue so, als wäre ich ein verantwortlicher Erwachsener, bin aber heimlich ein Kind im Herzen! #lustig #stimmung #leben",
      ],
      es: [
        "😂 ¡Cuando la vida te dé limones, hazte una selfie y deja todo mundo se perguntando el qué estás aprontando! #divertido #selfie #humor",
        "🤪 Plot twist: Na verdade sou adulto, mas ninguém contou para o meu senso de humor! #divertido #adulto #piadas",
        "😆 Humor atual: Fingindo ser um adulto responsável enquanto secretamente sou uma criança no coração! #divertido #humor #vida",
      ],
      fr: [
        "😂 Quand la vie vous donne des citrons, prenez un selfie et laissez tout le monde se demander ce que vous préparez ! #drôle #selfie #humeur",
        "🤪 Rebondissement : Je suis en fait un adulte, mais personne ne l'a dit à mon sens de l'humour ! #drôle #adulte #blagues",
        "😆 Humeur actuelle : Faire semblant d'être un adulte responsable tout en étant secrètement un enfant dans l'âme ! #drôle #humeur #vie",
      ],
      pt: [
        "😂 Quando a vida te der limões, tire uma selfie e deixe todo mundo se perguntando o que você está aprontando! #engraçado #selfie #humor",
        "🤪 Plot twist: Na verdade sou adulto, mas ninguém contou para o meu senso de humor! #engraçado #adulto #piadas",
        "😆 Humor atual: Fingindo ser um adulto responsável enquanto secretamente sou uma criança no coração! #engraçado #humor #vida",
      ],
      zh: [
        "😂 当生活给你柠檬时，自拍一张，让每个人都想知道你在做什么！#搞笑 #自拍 #心情",
        "🤪 剧情反转：我其实是个成年人，但没人告诉我的幽默感！#搞笑 #成年人 #笑话",
        "😆 当前心情：假装是个负责任的成年人，但内心深处还是个孩子！#搞笑 #心情 #生活",
      ],
      hi: [
        "😂 जब जिंदगी आपको नींबू दे, तो सेल्फी लें और सबको सोचने पर मजबूर करें कि आप क्या कर रहे हैं! #मजेदार #सेल्फी #मूड",
        "🤪 प्लॉट ट्विस्ट: मैं वास्तव में एक वयस्क हूं, लेकिन किसी ने मेरी हास्य भावना को नहीं बताया! #मजेदार #वयस्क #चुटकुले",
        "😆 वर्तमान मूड: एक जिम्मेदार वयस्क होने का नाटक करते हुए जबकि गुप्त रूप से दिल से बच्चा हूं! #मजेदार #मूड #जीवन",
      ],
    },
    general: {
      en: [
        "✨ Living my best life! Every moment is a new adventure waiting to unfold. #blessed #goodvibes #lifestyle",
        "🌟 Embracing every moment with gratitude and joy. Life is beautiful! #grateful #happiness #positivity",
        "💫 Creating memories that will last forever. Here's to living fully! #memories #life #adventure",
      ],
      bg: [
        "✨ Живея най-добрия си живот! Всеки момент е ново приключение, което чака да се разгърне. #благословен #добривибрации #начинназивот",
        "🌟 Прегръщам всеки момент с благодарност и радост. Животът е красив! #благодарен #щастие #позитивност",
        "💫 Създавам спомени, които ще останат завинаги. За пълноценния живот! #спомени #живот #приключение",
      ],
      de: [
        "✨ Lebe mein bestes Leben! Jeder Moment ist ein neues Abenteuer, das darauf wartet, sich zu entfalten. #gesegnet #gutevibes #lifestyle",
        "🌟 Jeden Moment mit Dankbarkeit und Freude umarmen. Das Leben ist schön! #dankbar #glück #positivität",
        "💫 Erinnerungen schaffen, die für immer bleiben werden. Auf das volle Leben! #erinnerungen #leben #abenteuer",
      ],
      es: [
        "✨ ¡Viviendo mi mejor vida! Cada momento es una nueva aventura esperando desplegarse. #bendecido #buenasvibraciones #estilodeVida",
        "🌟 Abrazando cada momento con gratitud y alegría. ¡La vida es hermosa! #agradecido #felicidad #positividad",
        "💫 Creando recuerdos que durarán para siempre. ¡Por vivir plenamente! #recuerdos #vida #aventura",
      ],
      fr: [
        "✨ Je vis ma meilleure vie ! Chaque moment est une nouvelle aventure qui attend de se déployer. #béni #bonnesvibes #lifestyle",
        "🌟 Embrasser chaque moment avec gratitude et joie. La vie est belle ! #reconnaissant #bonheur #positivité",
        "💫 Créer des souvenirs qui dureront pour toujours. À la vie pleine ! #souvenirs #vie #aventure",
      ],
      pt: [
        "✨ Vivendo minha melhor vida! Cada momento é uma nova aventura esperando para se desenrolar. #abençoado #boasvibrações #estilodeVida",
        "🌟 Abraçando cada momento com gratidão e alegria. A vida é linda! #grato #felicidade #positividade",
        "💫 Criando memórias que durarão para sempre. Aqui está para viver plenamente! #memórias #vida #aventura",
      ],
      zh: [
        "✨ 过着我最好的生活！每一刻都是等待展开的新冒险。#幸福 #正能量 #生活方式",
        "🌟 用感激和喜悦拥抱每一刻。生活是美好的！#感恩 #幸福 #积极",
        "💫 创造永远持续的回忆。为充实的生活干杯！#回忆 #生活 #冒险",
      ],
      hi: [
        "✨ अपनी सबसे अच्छी जिंदगी जी रहा हूं! हर पल एक नया रोमांच है जो खुलने का इंतजार कर रहा है। #धन्य #अच्छेवाइब्स #जीवनशैली",
        "🌟 कृतज्ञता और खुशी के साथ हर पल को गले लगाना। जिंदगी खूबसूरत है! #आभारी #खुशी #सकारात्मकता",
        "💫 ऐसी यादें बना रहा हूं जो हमेशा के लिए रहेंगी। पूरी तरह से जीने के लिए! #यादें #जिंदगी #रोमांच",
      ],
    },
    // Add more topics and languages as needed...
  }

  const topicCaptions = fallbackCaptions[topic] || fallbackCaptions.general
  const languageCaptions = topicCaptions[language] || topicCaptions.en

  return languageCaptions[Math.floor(Math.random() * languageCaptions.length)]
}

function buildPrompt(topic: string, language: string): string {
  const languageNames: Record<string, string> = {
    en: "English",
    bg: "Bulgarian",
    de: "German",
    es: "Spanish",
    fr: "French",
    pt: "Portuguese",
    zh: "Chinese",
    hi: "Hindi",
  }

  const topicPrompts: Record<string, string> = {
    funny: "Create a humorous and entertaining social media caption",
    general: "Create an engaging and versatile social media caption",
    travel: "Create a travel-focused social media caption with wanderlust vibes",
    food: "Create a food-focused social media caption that's appetizing",
    fitness: "Create a fitness and health-focused motivational caption",
    lifestyle: "Create a lifestyle-focused aspirational caption",
    business: "Create a professional and business-focused caption",
    nature: "Create a nature and outdoor-focused caption",
    fashion: "Create a fashion and style-focused trendy caption",
  }

  const basePrompt = topicPrompts[topic] || topicPrompts.general
  const languageName = languageNames[language] || "English"

  return `${basePrompt} for this image. Write the caption in ${languageName}. Include relevant hashtags and emojis. Keep it under 280 characters and make it engaging for social media.`
}
