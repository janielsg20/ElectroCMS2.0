import { LocalAuthProvider } from './auth-adapter';
import { PermissionEvaluator } from './permission-evaluator';

// Mock localStorage
const localStorageMock = (function() {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => { store[key] = value.toString(); },
    removeItem: (key: string) => { delete store[key]; },
    clear: () => { store = {}; }
  };
})();
Object.defineProperty(global, 'localStorage', { value: localStorageMock });

describe('LocalAuthProvider', () => {
  const auth = new LocalAuthProvider();

  beforeEach(() => {
    localStorage.clear();
  });

  it('should login with correct credentials', async () => {
    await auth.login({ email: 'admin@electrocms.local', password: 'admin' });
    const identity = await auth.getIdentity();
    expect(identity?.email).toBe('admin@electrocms.local');
    expect(identity?.roles).toContain('admin');
  });

  it('should reject wrong credentials', async () => {
    await expect(auth.login({ email: 'wrong@test.com', password: 'bad' }))
      .rejects.toThrow('Invalid credentials');
  });

  it('should logout correctly', async () => {
    await auth.login({ email: 'admin@electrocms.local', password: 'admin' });
    await auth.logout();
    await expect(auth.checkAuth()).rejects.toBeUndefined();
  });
});

describe('PermissionEvaluator', () => {
  it('should allow everything for admin role', () => {
    const can = PermissionEvaluator.can(['admin'], { resource: 'projects', action: 'delete' });
    expect(can).toBe(true);
  });

  it('should deny by default for other roles (until F12)', () => {
    const can = PermissionEvaluator.can(['editor'], { resource: 'projects', action: 'delete' });
    expect(can).toBe(false);
  });
});
