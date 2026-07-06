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

  const login = () => {
    setAuthed(true);
  };
  const logout = () => {
    setAuthed(false);
  };

  return (
    <AuthContext.Provider value={{ authed, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
