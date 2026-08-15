/**
 * ElectroCMS Permission Evaluator
 * Core logic for role-based and capability-based access control.
 */

export interface ElectroPermissionRequest {
  resource: string;
  action: 'list' | 'create' | 'edit' | 'show' | 'delete' | string;
  params?: any;
}

export interface ElectroPermissionPolicy {
  resource: string;
  actions: string[];
}

export interface ElectroRole {
  name: string;
  policies: ElectroPermissionPolicy[];
}

export class PermissionEvaluator {
  /**
   * Evaluates if a set of roles allows a specific action on a resource.
   */
  static can(roles: string[], _request: ElectroPermissionRequest): boolean {
    if (roles.includes('admin')) return true;

    // Basic logic for now: roles are names of policies
    // In F12, this will use the ElectroRole store.

    return false;
  }

  /**
   * Adapts Electro permission logic to Refine's AccessControlProvider.
   */
  static getAccessControlProvider(roles: string[]) {
    return {
      can: async ({ resource, action, params }: any) => {
        const canAccess = this.can(roles, { resource, action, params });
        return {
          can: canAccess,
          reason: canAccess ? undefined : "Access denied by ElectroPermissionEvaluator",
        };
      },
    };
  }
}
