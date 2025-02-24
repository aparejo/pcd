import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

axios.defaults.baseURL = 'https://admin.pcdservicesusa.com';
axios.defaults.headers.common['Content-Type'] = 'application/json';

interface AuthState {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      login: async (username: string, password: string): Promise<void> => {
        try {
          const response = await axios.post('/api-token-auth/', {
            username,
            password,
          });

          const { token } = response.data;

          if (!token) {
            throw new Error('No token received from server');
          }

          axios.defaults.headers.common['Authorization'] = `Token ${token}`;
          
          set({
            token,
            user: { username },
            isAuthenticated: true
          });
        } catch (error) {
          delete axios.defaults.headers.common['Authorization'];
          set({
            token: null,
            user: null,
            isAuthenticated: false
          });
          throw error;
        }
      },
      logout: () => {
        // Remove token from axios defaults
        delete axios.defaults.headers.common['Authorization'];
        // Reset auth state
        set({
          token: null,
          user: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);