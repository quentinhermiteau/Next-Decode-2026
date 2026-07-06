"use client";

import HeaderAdmin from "@/components/HeaderAdmin";
import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "@/i18n/navigation";
import { useContext } from "react";

export default function AuthedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { authed } = useContext(AuthContext);
  const router = useRouter();

  if (!authed) {
    router.push("/");
  }

  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
}
