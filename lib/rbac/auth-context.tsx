'use client';

import React, { createContext, useCallback, useEffect, useState } from 'react';
import { User, UserRole } from './roles';

export interface AuthContextType {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  switchRole: (role: UserRole) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const MOCK_USERS: Record<UserRole, User> = {
  super_admin: {
    id: '1',
    name: 'Admin User',
    email: 'admin@pstc.org',
    role: 'super_admin',
    avatar: '👤',
  },
  admin: {
    id: '2',
    name: 'Administrator',
    email: 'administrator@pstc.org',
    role: 'admin',
    avatar: '👤',
  },
  editor: {
    id: '3',
    name: 'Editor User',
    email: 'editor@pstc.org',
    role: 'editor',
    avatar: '👤',
  },
  program_manager: {
    id: '4',
    name: 'Program Manager',
    email: 'pm@pstc.org',
    role: 'program_manager',
    avatar: '👤',
  },
  viewer: {
    id: '5',
    name: 'Viewer User',
    email: 'viewer@pstc.org',
    role: 'viewer',
    avatar: '👤',
  },
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUserState] = useState<User | null>(
    MOCK_USERS.super_admin,
  );

  useEffect(() => {
    const stored = localStorage.getItem('pstc_user');
    if (!stored) return;

    try {
      setCurrentUserState(JSON.parse(stored));
    } catch {
      setCurrentUserState(MOCK_USERS.super_admin);
    }
  }, []);

  const setCurrentUser = useCallback((user: User) => {
    setCurrentUserState(user);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pstc_user', JSON.stringify(user));
    }
  }, []);

  const switchRole = useCallback((role: UserRole) => {
    const newUser = MOCK_USERS[role];
    setCurrentUser(newUser);
  }, [setCurrentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}
