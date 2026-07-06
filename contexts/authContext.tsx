"use client";

import { createContext, useState } from "react";

type AuthContextType = {
  authed: boolean;
  login?: () => void;
  logout?: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  authed: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ authed }}>{children}</AuthContext.Provider>
  );
}
