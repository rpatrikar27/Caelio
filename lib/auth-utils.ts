import { adminAuth } from './firebase-admin';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function verifyAndSyncUser(token: string) {
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    const { uid, email } = decodedToken;

    if (!email) throw new Error('Email not found in token');

    // Sync with SQL database
    let [user] = await db.select().from(users).where(eq(users.uid, uid));

    if (!user) {
      [user] = await db.insert(users).values({
        uid,
        email,
        role: 'admin',
      }).returning();
    }

    return user;
  } catch (error) {
    console.error('Auth Verification Error:', error);
    return null;
  }
}
