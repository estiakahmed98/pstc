"use client";

import { createContext } from "react";
import { useSession } from "next-auth/react";
import type { User } from "./roles";

export interface AuthContextType {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const sessionUser = session?.user;
  const currentUser: User | null = sessionUser
    ? {
        id: sessionUser.id,
        name: sessionUser.name ?? "Admin User",
        email: sessionUser.email ?? "",
        role: sessionUser.role,
        avatar: sessionUser.image ?? undefined,
      }
    : null;

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
