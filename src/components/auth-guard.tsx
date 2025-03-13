// src/components/AuthGuard.tsx
'use client';
import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';

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
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  // Render children only if authenticated
  return user ? <>{children}</> : null;
}
