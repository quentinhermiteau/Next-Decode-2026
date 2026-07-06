"use client";

import { login, logout } from "@/actions/cookies";
import { useRouter } from "@/i18n/navigation";
import Button from "./Button";

type HeaderProps = {
  authed: boolean;
};

export default function Header({ authed }: HeaderProps) {
  const router = useRouter();

  const handleLogin = async () => {
    await login();
    router.refresh();
  };

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <div className="flex shadow-2xl bg-gray-200 text-2xl p-4 m-4 rounded-2xl">
      <div className="w-full flex items-center justify-between">
        <div>Header</div>
        {authed ? (
          <div>
            <Button onClick={() => router.push("/dashboard")}>Dashboard</Button>
            <Button variant="destructive" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        )}
      </div>
    </div>
  );
}
