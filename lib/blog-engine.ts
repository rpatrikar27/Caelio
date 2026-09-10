import { db } from '@/db';
import { knowledgeBase } from '@/db/schema';
import { ai } from './gemini';
import { posts, topicHistory } from '@/db/schema';
import { eq, desc, and } from 'drizzle-orm';
import { Type } from "@google/genai";

const BRAND_CONTEXT = `
Business: Caelio Coffee House
Website: caeliocoffeehouse.com
Instagram: @caeliocoffee
Location: Nandanvan, Nagpur, Maharashtra, India
Founders: Rohit Patrikar and Shahnawaz Pathan
Personality: Premium but approachable, Modern café, Warm, Local, Youthful, Food-focused, Community-oriented, Indian cultural connection, Genuine and human.
Specialties: Specialty Indian coffee, European cafe sanctuary culture, Ceremonial Uji Matcha, Sourdough fermentation, Artisanal European culinary artistry.
Hours: 12:00 PM to 01:00 AM daily.
`;

export async function generateDailyBlog() {
  try {
    // 1. Get Context
    const kb = await db.select().from(knowledgeBase);
    const history = await db.select().from(topicHistory).orderBy(desc(topicHistory.generatedAt)).limit(20);
    
    // 2. Select Topic
    const topicResult = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `
        Based on the following brand context and recent topic history, select a unique and engaging blog topic for Caelio Coffee House today.
        
        BRAND CONTEXT:
        ${BRAND_CONTEXT}
        
        KNOWLEDGE BASE:
        ${JSON.stringify(kb)}
        
        RECENT TOPICS (DO NOT REPEAT):
        ${history.map(h => h.topic).join(', ')}
        
        CRITERIA:
        - Highly relevant to Nagpur audience.
        - Educational about specialty coffee or European food.
        - Community-focused (creators, thinkers, late-night crowds).
        - SEO friendly.
        - Can be about a specific menu item, a coffee brewing technique, local festivals, or cafe culture.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            topic: { type: Type.STRING },
            category: { type: Type.STRING },
            angle: { type: Type.STRING, description: "The specific storytelling angle" }
          },
          required: ["topic", "category", "angle"]
        }
      }
    });

    if (!topicResult.text) throw new Error('Failed to generate topic');
    const { topic, category, angle } = JSON.parse(topicResult.text);

    // 3. Generate Content
    const articleResult = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: `
        Write a professional, SEO-optimized blog article for Caelio Coffee House.
        
        TOPIC: ${topic}
        CATEGORY: ${category}
        ANGLE: ${angle}
        BRAND VOICE: ${BRAND_CONTEXT}
        
        STRUCTURE:
        - Catchy H1 Title.
        - Compelling Intro.
        - 3-4 H2 Subheadings with detailed, value-driven content.
        - A "Caelio Connection" section (how it relates to our cafe).
        - Conclusion with Call to Action (visit us at Nandanvan or order on Zomato).
        - Meta metadata (Title, Description, Keywords).
        
        FORMAT: Markdown.
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            excerpt: { type: Type.STRING },
            content: { type: Type.STRING },
            metaTitle: { type: Type.STRING },
            metaDescription: { type: Type.STRING },
            keywords: { type: Type.ARRAY, items: { type: Type.STRING } },
            heroImagePrompt: { type: Type.STRING, description: "A detailed prompt for AI image generation representing this article" }
          },
          required: ["title", "excerpt", "content", "metaTitle", "metaDescription", "keywords", "heroImagePrompt"]
        }
      }
    });

    if (!articleResult.text) throw new Error('Failed to generate article');
    const article = JSON.parse(articleResult.text);

    // 4. Handle Image (Simplified for now - using picsum with seed or a placeholder)
    // In a real scenario, we'd trigger a 3rd party image API or use the Gemini Image API if paid.
    const heroImage = `https://picsum.photos/seed/${encodeURIComponent(topic)}/1200/800`;

    // 5. Save to Database
    const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    
    const [newPost] = await db.insert(posts).values({
      title: article.title,
      slug: slug,
      excerpt: article.excerpt,
      content: article.content,
      category: category,
      status: 'published',
      heroImage: heroImage,
      heroImageAlt: article.title,
      metaTitle: article.metaTitle,
      metaDescription: article.metaDescription,
      readingTime: Math.ceil(article.content.split(' ').length / 200),
      publishedAt: new Date(),
      seoData: {
        ogTitle: article.metaTitle,
        ogDescription: article.metaDescription,
        keywords: article.keywords,
      }
    }).returning();

    // 6. Record in History
    await db.insert(topicHistory).values({
      topic: topic,
      category: category
    });

    return newPost;
  } catch (error) {
    console.error('Blog Generation Error:', error);
    throw error;
  }
}
