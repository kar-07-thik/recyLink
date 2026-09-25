import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { configureApiToken } from '../api/client';

const AuthContext = createContext(null);
const SESSION_KEY = '@recyLink/session';

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(SESSION_KEY).then((value) => {
      if (value) {
        const savedSession = JSON.parse(value);
        setSession(savedSession);
        configureApiToken(savedSession.token);
      }
      setIsLoading(false);
    });
  }, []);

  const signIn = async ({ role, token = 'placeholder-token' }) => {
    const nextSession = { role, token };
    setSession(nextSession);
    configureApiToken(token);
    await AsyncStorage.setItem(SESSION_KEY, JSON.stringify(nextSession));
  };

  const signOut = async () => {
    setSession(null);
    configureApiToken(null);
    await AsyncStorage.removeItem(SESSION_KEY);
  };

  return <AuthContext.Provider value={{ session, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
