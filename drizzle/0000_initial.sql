-- Baseline for the table originally created by Prisma (migration 20250605144615_initial).
-- IF NOT EXISTS keeps this a no-op on the existing database while still working on a fresh one.
CREATE TABLE IF NOT EXISTS "views" (
	"slug" varchar(128) PRIMARY KEY NOT NULL,
	"count" bigint DEFAULT 1 NOT NULL
);
