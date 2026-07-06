import { isAuthenticated } from "@/actions/cookies";
import HeaderAdmin from "@/components/HeaderAdmin";
import { redirect } from "next/navigation";

export default async function AuthedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const authenticated = await isAuthenticated();

  if (!authenticated) {
    redirect("/");
  }

  return (
    <>
      <HeaderAdmin />
      {children}
    </>
  );
}
