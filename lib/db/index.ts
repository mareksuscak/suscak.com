import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

type Database = NodePgDatabase<typeof schema>;

// Reuse the pool across hot reloads in development so we don't exhaust
// the database connection limit.
const globalForDb = globalThis as unknown as { db?: Database };

const db =
  globalForDb.db ??
  drizzle({
    client: new Pool({ connectionString: process.env.DATABASE_URL }),
    schema,
    logger: process.env.NODE_ENV !== 'production',
  });

if (process.env.NODE_ENV !== 'production') globalForDb.db = db;

export default db;
