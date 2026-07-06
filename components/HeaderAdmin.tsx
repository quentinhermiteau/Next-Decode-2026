"use client";

import { logout } from "@/actions/cookies";
import Button from "./Button";

export default function HeaderAdmin() {
  return (
    <div className="flex shadow-2xl bg-gray-200 text-2xl p-4 m-4 rounded-2xl">
      <div className="w-full flex items-center justify-between">
        <div>Header admin</div>
        <div>
          <Button variant="destructive" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
