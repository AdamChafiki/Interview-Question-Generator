// src/components/AuthGuard.tsx
'use client';
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Loading from './loading';

interface AuthGuardProps {
  children: ReactNode;
  fallbackUrl?: string;
}

/**
 * Component to protect routes that require authentication
 */
export default function AuthGuard({ children, fallbackUrl = '/login' }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to login if not authenticated and not loading
    if (!loading && !user) {
      router.push(fallbackUrl);
    }
  }, [user, loading, router, fallbackUrl]);

  // Show loading state
  if (loading) return <Loading />;

  // Render children only if authenticated
  return user ? <>{children}</> : null;
}
