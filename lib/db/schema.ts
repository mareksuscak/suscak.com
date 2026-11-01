import { sql } from 'drizzle-orm';
import { bigint, pgTable, varchar } from 'drizzle-orm/pg-core';

export const views = pgTable('views', {
  slug: varchar('slug', { length: 128 }).primaryKey(),
  count: bigint('count', { mode: 'bigint' })
    .notNull()
    .default(sql`1`),
});
