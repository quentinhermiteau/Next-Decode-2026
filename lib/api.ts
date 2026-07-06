"use server";

export async function get(path: string) {
  return fetch(new URL(path, process.env.API_URL)).then((res) => res.json());
}
