import { RuleGroupType, RuleType } from 'react-querybuilder';
import { ElectroQueryDefinition } from '../models/query-model';

export interface SQLTranslation {
  sql: string;
  params: any[];
}

export class QueryAdapter {
  /**
   * Translates an ElectroQueryDefinition to a parameterized SQL string for PGlite.
   * We implement a custom recursive translator to strictly enforce our hybrid logic
   * and fail-closed policy.
   */
  static translateToSQL(
    queryDef: ElectroQueryDefinition,
    indexedFields: string[] = []
  ): SQLTranslation {
    const params: any[] = [];
    const sql = this.processGroup(queryDef.rules, indexedFields, params);

    return { sql, params };
  }

  private static processGroup(
    group: RuleGroupType,
    indexedFields: string[],
    params: any[]
  ): string {
    if (group.rules.length === 0) return '(1=1)';

    const parts = group.rules.map(rule => {
      if ('rules' in rule) {
        return `(${this.processGroup(rule as RuleGroupType, indexedFields, params)})`;
      } else {
        return this.processRule(rule as RuleType, indexedFields, params);
      }
    });

    const combinator = group.combinator.toUpperCase();
    return `(${parts.join(` ${combinator} `)})`;
  }

  private static processRule(
    rule: RuleType,
    indexedFields: string[],
    params: any[]
  ): string {
    const { field, operator, value } = rule;

    // Fail-closed: check unsupported operators
    const unsupportedOperators = ['regexp'];
    if (unsupportedOperators.includes(operator)) {
      throw new Error(`Unsupported operator: ${operator}. Query blocked (fail-closed).`);
    }

    const column = indexedFields.includes(field)
      ? `(SELECT value_string FROM record_field_index WHERE record_id = content_records.id AND field_path = '${field}')`
      : `data->>'${field}'`;

    const sqlOperator = this.mapOperator(operator);

    // Simple parameterized placeholder
    params.push(value);
    return `${column} ${sqlOperator} ?`;
  }

  private static mapOperator(op: string): string {
    const map: Record<string, string> = {
      '=': '=',
      '!=': '!=',
      '<': '<',
      '>': '>',
      '<=': '<=',
      '>=': '>=',
      'contains': 'LIKE',
      'beginsWith': 'LIKE',
      'endsWith': 'LIKE',
    };

    if (!map[op]) {
      throw new Error(`Operator mapping missing for: ${op}`);
    }

    return map[op];
  }
}
