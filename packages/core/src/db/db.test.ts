import { initDB } from './db-client';
import { ProjectRepository } from './project-repository';

describe('Database POC (PGlite + Drizzle)', () => {
  let repo: ProjectRepository;

  beforeAll(async () => {
    const { db } = await initDB('memory://');
    repo = new ProjectRepository(db);
  });

  it('should create a project and save objects incrementally', async () => {
    const project = await repo.createProject('Test Project');

    // Save first object
    await repo.saveObject(project.id, 'doc-1', 'doc', { title: 'Object 1' });

    // Save second object
    await repo.saveObject(project.id, 'doc-2', 'doc', { title: 'Object 2' });

    // Update only first object
    const [updated] = await repo.saveObject(project.id, 'doc-1', 'doc', { title: 'Object 1 Updated' });

    expect(updated.id).toBe('doc-1');
    expect(updated.data).toEqual({ title: 'Object 1 Updated' });
  });

  it('should support generic content types and indexing without physical DDL changes', async () => {
    const project = await repo.createProject('CMS Project');

    // Create record with a "logical" field 'color'
    await repo.createRecord(project.id, 'product',
      { name: 'T-Shirt', color: 'Red', price: 20 },
      ['color']
    );

    // Verify index works for the logical field
    const facetedValues = await repo.getFacetedValues('color');
    expect(facetedValues.length).toBe(1);
    expect(facetedValues[0].value).toBe('Red');

    // Add a NEW logical field 'size' to another record - NO ALTER TABLE needed
    await repo.createRecord(project.id, 'product',
      { name: 'Jeans', size: 'Large' },
      ['size']
    );

    const sizes = await repo.getFacetedValues('size');
    expect(sizes[0].value).toBe('Large');
  });
});
