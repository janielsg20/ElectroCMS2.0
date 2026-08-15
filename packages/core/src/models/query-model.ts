import { RuleGroupType } from 'react-querybuilder';

/**
 * ElectroCMS Query Definition
 * Wrapper around RQB rule tree.
 */
export interface ElectroQueryDefinition {
  id: string;
  sourceContentTypeIds: string[];
  rules: RuleGroupType;
  version: number;
  metadata?: Record<string, any>;
}

export interface QueryDiagnostic {
  code: string;
  message: string;
  severity: 'warning' | 'error';
  path?: string[];
}
