import { QueryAdapter } from './query-adapter';
import { ElectroQueryDefinition } from '../models/query-model';

describe('QueryAdapter POC (RQB + Fail-closed)', () => {
  const mockQuery: ElectroQueryDefinition = {
    id: 'q1',
    sourceContentTypeIds: ['product'],
    version: 1,
    rules: {
      combinator: 'and',
      rules: [
        { field: 'color', operator: '=', value: 'Red' },
        { field: 'price', operator: '>', value: 10 }
      ],
    },
  };

  it('should translate rules to hybrid SQL (indexed vs generic)', () => {
    // Treat 'color' as indexed, 'price' as generic JSON
    const result = QueryAdapter.translateToSQL(mockQuery, ['color']);

    expect(result.sql).toContain("(SELECT value_string FROM record_field_index");
    expect(result.sql).toContain("data->>'price'");
    expect(result.params).toEqual(['Red', 10]);
  });

  it('should implement fail-closed policy for unsupported operators', () => {
    const badQuery: ElectroQueryDefinition = {
      ...mockQuery,
      rules: {
        combinator: 'and',
        rules: [{ field: 'name', operator: 'regexp', value: '.*' }]
      }
    };

    expect(() => QueryAdapter.translateToSQL(badQuery)).toThrow('Unsupported operator: regexp');
  });

  it('should prevent SQL injection via parameterized output', () => {
    const injectionQuery: ElectroQueryDefinition = {
      ...mockQuery,
      rules: {
        combinator: 'and',
        rules: [{ field: 'name', operator: '=', value: "'; DROP TABLE projects;--" }]
      }
    };

    const result = QueryAdapter.translateToSQL(injectionQuery);
    expect(result.params).toContain("'; DROP TABLE projects;--");
    expect(result.sql).not.toContain("DROP TABLE");
  });
});
