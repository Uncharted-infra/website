import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in | Uncharted",
  description: "Sign in to continue planning your next trip with Uncharted.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
