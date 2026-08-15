import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schema';

export type ElectroDB = ReturnType<typeof drizzle<typeof schema>>;

let client: PGlite | null = null;
let db: ElectroDB | null = null;

export const initDB = async (dataDir: string = 'memory://') => {
  if (client) return { client, db: db! };

  client = new PGlite(dataDir);
  db = drizzle(client, { schema });

  // For POC, we'll manually run a basic initialization
  // In production, we'd use drizzle-kit migrations
  await client.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT now(),
      updated_at TIMESTAMP NOT NULL DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS project_objects (
      id TEXT PRIMARY KEY,
      project_id UUID NOT NULL REFERENCES projects(id),
      type TEXT NOT NULL,
      data JSONB NOT NULL,
      checksum TEXT NOT NULL,
      updated_at TIMESTAMP NOT NULL DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS content_records (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      project_id UUID NOT NULL REFERENCES projects(id),
      content_type_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'draft',
      data JSONB NOT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT now(),
      updated_at TIMESTAMP NOT NULL DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS record_field_index (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      record_id UUID NOT NULL REFERENCES content_records(id),
      field_path TEXT NOT NULL,
      value_string TEXT,
      value_number INTEGER
    );
  `);

  return { client, db: db! };
};

export const getDB = () => {
  if (!db) throw new Error('DB not initialized. Call initDB() first.');
  return db;
};
