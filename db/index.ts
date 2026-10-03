import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

declare global {
  var _postgresPool: Pool | undefined;
}

export const isDatabaseConfigured = (): boolean => {
  return Boolean(
    process.env.DATABASE_URL ||
    (process.env.SQL_HOST && process.env.SQL_USER && process.env.SQL_DB_NAME)
  );
};

export const createPool = () => {
  if (!global._postgresPool) {
    const connectionString = process.env.DATABASE_URL;
    const isProd = process.env.NODE_ENV === 'production';

    const poolConfig = connectionString
      ? {
          connectionString,
          max: 10,
          connectionTimeoutMillis: 5000,
          ssl: isProd && !connectionString.includes('localhost') && !connectionString.includes('127.0.0.1')
            ? { rejectUnauthorized: false }
            : undefined,
        }
      : {
          host: process.env.SQL_HOST || '127.0.0.1',
          port: process.env.SQL_PORT ? parseInt(process.env.SQL_PORT, 10) : 5432,
          user: process.env.SQL_USER || 'postgres',
          password: process.env.SQL_PASSWORD || '',
          database: process.env.SQL_DB_NAME || 'postgres',
          max: 10,
          connectionTimeoutMillis: 5000,
        };

    global._postgresPool = new Pool(poolConfig);

    global._postgresPool.on('error', (err) => {
      console.warn('PostgreSQL pool notice:', err.message);
    });
  }
  return global._postgresPool;
};

const pool = createPool();
export const db = drizzle(pool, { schema });
