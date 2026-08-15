/**
 * ElectroCMS Auth Adapter
 * Implements Refine's AuthProvider interface.
 */

export interface ElectroUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

export interface ElectroAuthProvider {
  login: (params: any) => Promise<any>;
  logout: (params: any) => Promise<any>;
  checkAuth: (params: any) => Promise<any>;
  checkError: (error: any) => Promise<any>;
  getPermissions: (params: any) => Promise<string[]>;
  getIdentity: (params: any) => Promise<ElectroUser | null>;
}

/**
 * Basic Local Auth Provider for initial development.
 * In a real scenario, this would interact with PGlite or a SecureStore.
 */
export class LocalAuthProvider implements ElectroAuthProvider {
  private currentUser: ElectroUser | null = null;

  async login({ email, password }: any) {
    // Mock login logic
    if (email === "admin@electrocms.local" && password === "admin") {
      this.currentUser = {
        id: "1",
        name: "Admin User",
        email: "admin@electrocms.local",
        roles: ["admin"],
      };
      localStorage.setItem("electro_auth", JSON.stringify(this.currentUser));
      return Promise.resolve();
    }
    return Promise.reject(new Error("Invalid credentials"));
  }

  async logout() {
    this.currentUser = null;
    localStorage.removeItem("electro_auth");
    return Promise.resolve();
  }

  async checkAuth() {
    const session = localStorage.getItem("electro_auth");
    if (session) {
      this.currentUser = JSON.parse(session);
      return Promise.resolve();
    }
    return Promise.reject();
  }

  async checkError(error: any) {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("electro_auth");
      return Promise.reject();
    }
    return Promise.resolve();
  }

  async getPermissions() {
    return this.currentUser?.roles || [];
  }

  async getIdentity() {
    return this.currentUser;
  }
}
