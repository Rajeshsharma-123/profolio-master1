import { useSession } from 'next-auth/react';

export const useCurrentUser = () => {
  // Destructure status along with data (aliased as session)
  const { data: session, status } = useSession(); 

  // CRITICAL FIX: If the session is still loading, return null immediately.
  if (status === "loading") {
    return null;
  }
  
  // Safely return the user data if available.
  // This will be null if the user is unauthenticated.
  return session?.user; 
};