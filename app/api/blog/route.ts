import { NextRequest, NextResponse } from 'next/server';
import { db, isDatabaseConfigured } from '@/db';
import { posts } from '@/db/schema';
import { desc, eq } from 'drizzle-orm';
import { FALLBACK_JOURNAL_POSTS } from '@/data/journalData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);
  const slug = searchParams.get('slug');

  if (slug) {
    if (isDatabaseConfigured()) {
      try {
        const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
        if (post) return NextResponse.json(post);
      } catch (error) {
        console.warn('Database error fetching post by slug, checking fallbacks:', error);
      }
    }
    const fallbackPost = FALLBACK_JOURNAL_POSTS.find((p) => p.slug === slug);
    if (fallbackPost) return NextResponse.json(fallbackPost);
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  if (isDatabaseConfigured()) {
    try {
      const results = await db.select()
        .from(posts)
        .where(eq(posts.status, 'published'))
        .orderBy(desc(posts.publishedAt))
        .limit(limit)
        .offset(offset);

      if (results && results.length > 0) {
        return NextResponse.json(results);
      }
    } catch (error) {
      console.warn('Database error fetching posts, returning fallback posts:', error);
    }
  }

  const sliced = FALLBACK_JOURNAL_POSTS.slice(offset, offset + limit);
  return NextResponse.json(sliced);
}
