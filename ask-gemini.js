import { GoogleGenAI } from '@google/genai';

// Načtení API klíče z proměnné prostředí
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Získání textu z argumentu terminálu
const prompt = process.argv[2];

if (!prompt) {
  console.error('Chyba: Musíš zadat zadání v uvozovkách! Příklad: node ask-gemini.js "Napiš vtip"');
  process.exit(1);
}

async function main() {
  try {
    // Používáme nejnovější a nejrychlejší model gemini-2.5-flash
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    console.log(response.text);
  } catch (error) {
    console.error('Něco se nepovedlo:', error);
  }
}

main();
