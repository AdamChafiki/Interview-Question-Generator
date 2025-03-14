import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { onAuthStateChange } from '@/lib/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
}


export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChange((firebaseUser) => {
      setState({
        user: firebaseUser,
        loading: false,
      });
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return state;
}
