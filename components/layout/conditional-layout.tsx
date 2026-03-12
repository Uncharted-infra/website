"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/home/navbar";

const AUTH_PATHS = ["/login", "/signup"];

export function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = AUTH_PATHS.some((path) => pathname?.startsWith(path));

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="pt-14">{children}</div>
    </>
  );
}
