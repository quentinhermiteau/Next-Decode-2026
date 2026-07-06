"use client";

import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "@/i18n/navigation";
import { useContext } from "react";
import Button from "./Button";

export default function Header() {
  const { authed, login, logout } = useContext(AuthContext);
  const router = useRouter();

  return (
    <div className="flex shadow-2xl bg-gray-200 text-2xl p-4 m-4 rounded-2xl">
      <div className="w-full flex items-center justify-between">
        <div>Header</div>
        {authed ? (
          <div>
            <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
            <Button variant="destructive" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={login}>Login</Button>
          </div>
        )}
      </div>
    </div>
  );
}
