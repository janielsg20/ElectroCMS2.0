import { openDatabaseSync } from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as schema from '@electrocms/core/src/db/schema'; // Reusing schema from core

export const initNativeDB = () => {
  const expoDb = openDatabaseSync('electro.db');
  const db = drizzle(expoDb, { schema });
  return db;
};

// Note: In a real app, we would use migrations here too.
// For POC, we assume the schema is already synchronized via the same logic as the Studio.
