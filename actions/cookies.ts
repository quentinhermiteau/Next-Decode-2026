"use server";

import { cookies } from "next/headers";

export async function login() {
  const cookiesStore = await cookies();

  cookiesStore.set("token", "true");
}

export async function logout() {
  const cookiesStore = await cookies();

  cookiesStore.delete("token");
}

export async function isAuthenticated() {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("token");

  return token?.value === "true";
}
