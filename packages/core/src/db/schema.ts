import { pgTable, text, timestamp, jsonb, uuid, integer } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const projectObjects = pgTable('project_objects', {
  id: text('id').primaryKey(), // Using text ID for flexible object paths/IDs
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  type: text('type').notNull(), // 'doc', 'schema', 'query', etc.
  data: jsonb('data').notNull(),
  checksum: text('checksum').notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const projectRevisions = pgTable('project_revisions', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  manifest: jsonb('manifest').notNull(), // List of project_object IDs and versions
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const contentRecords = pgTable('content_records', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  contentTypeId: text('content_type_id').notNull(),
  status: text('status').default('draft').notNull(),
  data: jsonb('data').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const recordFieldIndex = pgTable('record_field_index', {
  id: uuid('id').primaryKey().defaultRandom(),
  recordId: uuid('record_id').references(() => contentRecords.id).notNull(),
  fieldPath: text('field_path').notNull(),
  valueString: text('value_string'),
  valueNumber: integer('value_number'),
});

export const relationEdges = pgTable('relation_edges', {
  id: uuid('id').primaryKey().defaultRandom(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  fromId: uuid('from_id').notNull(),
  toId: uuid('to_id').notNull(),
  relationId: text('relation_id').notNull(),
});
