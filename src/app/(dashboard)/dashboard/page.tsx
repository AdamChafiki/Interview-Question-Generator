'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { logOut } from '@/lib/auth';
import AuthGuard from '@/components/auth-guard';

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
  
  console.log(user)

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await logOut();
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  
  return (
    <AuthGuard>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-70 disabled:cursor-not-allowed flex items-center"
          >
            {isLoggingOut && (
              <span className="mr-2 animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
            )}
            {isLoggingOut ? 'Signing Out...' : 'Sign Out'}
          </button>
        </div>
        
        {user && (
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {user.photoURL && (
                <img 
                  src={user.photoURL} 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div className="text-center sm:text-left">
                <p className="font-bold text-lg">{user.displayName || 'User'}</p>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-xs text-gray-500 mt-1">Last login: {user.metadata.lastSignInTime}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthGuard>
  );
}
