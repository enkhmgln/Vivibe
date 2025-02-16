import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: true,

  signIn: async (email: string, password: string) => {
    try {
      // TODO: Implement actual API call
      const mockResponse = {
        user: {
          id: "1",
          email,
          fullName: "Test User",
        },
        token: "mock_token",
      };

      await AsyncStorage.setItem("auth_token", mockResponse.token);
      set({ user: mockResponse.user, token: mockResponse.token });
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    }
  },

  signUp: async (email: string, password: string, fullName: string) => {
    try {
      // TODO: Implement actual API call
      const mockResponse = {
        user: {
          id: "1",
          email,
          fullName,
        },
        token: "mock_token",
      };

      await AsyncStorage.setItem("auth_token", mockResponse.token);
      set({ user: mockResponse.user, token: mockResponse.token });
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    }
  },

  signOut: async () => {
    await AsyncStorage.removeItem("auth_token");
    set({ user: null, token: null });
  },
}));
