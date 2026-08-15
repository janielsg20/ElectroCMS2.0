import { eq } from 'drizzle-orm';
import { ElectroDB } from './db-client';
import { projects, projectObjects, contentRecords, recordFieldIndex } from './schema';
import crypto from 'crypto';

export class ProjectRepository {
  constructor(private db: ElectroDB) {}

  async createProject(name: string) {
    const [result] = await this.db.insert(projects).values({ name }).returning();
    return result;
  }

  async saveObject(projectId: string, id: string, type: string, data: any) {
    const dataString = JSON.stringify(data);
    const checksum = crypto.createHash('md5').update(dataString).digest('hex');

    // Upsert logic for incremental save
    return await this.db.insert(projectObjects).values({
      id,
      projectId,
      type,
      data,
      checksum,
      updatedAt: new Date(),
    }).onConflictDoUpdate({
      target: projectObjects.id,
      set: { data, checksum, updatedAt: new Date() }
    }).returning();
  }

  async createRecord(projectId: string, contentTypeId: string, data: any, facetedFields: string[] = []) {
    const [record] = await this.db.insert(contentRecords).values({
      projectId,
      contentTypeId,
      data,
    }).returning();

    // Index faceted fields
    if (facetedFields.length > 0) {
      const indexEntries = facetedFields.map(path => {
        const value = data[path];
        return {
          recordId: record.id,
          fieldPath: path,
          valueString: typeof value === 'string' ? value : JSON.stringify(value),
          valueNumber: typeof value === 'number' ? value : null,
        };
      });

      await this.db.insert(recordFieldIndex).values(indexEntries);
    }

    return record;
  }

  async getFacetedValues(fieldPath: string) {
    return await this.db.select({
      value: recordFieldIndex.valueString,
    }).from(recordFieldIndex)
      .where(eq(recordFieldIndex.fieldPath, fieldPath));
  }
}
