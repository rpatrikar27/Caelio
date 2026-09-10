import { pgTable, serial, text, timestamp, integer, jsonb, boolean } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Admin users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(), // Firebase Auth UID
  email: text('email').notNull().unique(),
  role: text('role').default('admin').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Blog posts table
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(), // Markdown format
  category: text('category').notNull(),
  status: text('status', { enum: ['draft', 'published', 'scheduled'] }).default('draft').notNull(),
  heroImage: text('hero_image').notNull(),
  heroImageAlt: text('hero_image_alt').notNull(),
  metaTitle: text('meta_title').notNull(),
  metaDescription: text('meta_description').notNull(),
  readingTime: integer('reading_time').notNull(),
  publishedAt: timestamp('published_at'),
  scheduledFor: timestamp('scheduled_for'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  seoData: jsonb('seo_data').$type<{
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    keywords?: string[];
  }>(),
});

// History of generated topics to prevent repetition
export const topicHistory = pgTable('topic_history', {
  id: serial('id').primaryKey(),
  topic: text('topic').notNull(),
  category: text('category').notNull(),
  generatedAt: timestamp('generated_at').defaultNow().notNull(),
});

// Caelio Knowledge Base (Source of truth)
export const knowledgeBase = pgTable('knowledge_base', {
  id: serial('id').primaryKey(),
  key: text('key').notNull().unique(), // e.g., 'menu', 'hours', 'location'
  value: jsonb('value').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));
