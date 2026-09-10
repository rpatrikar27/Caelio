import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { desc, eq, and, isNotNull } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');
  const slug = searchParams.get('slug');

  try {
    if (slug) {
      const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
      if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      return NextResponse.json(post);
    }

    const results = await db.select()
      .from(posts)
      .where(eq(posts.status, 'published'))
      .orderBy(desc(posts.publishedAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
