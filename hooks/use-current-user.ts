'use client';

import { useContext } from 'react';
import { AuthContext } from '@/lib/rbac/auth-context';

export function useCurrentUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useCurrentUser must be used within AuthProvider');
  }
  return context.currentUser;
}

export function useSetCurrentUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSetCurrentUser must be used within AuthProvider');
  }
  return context.setCurrentUser;
}

export function useSwitchRole() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSwitchRole must be used within AuthProvider');
  }
  return context.switchRole;
}
