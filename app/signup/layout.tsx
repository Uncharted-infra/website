import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started for free | Uncharted",
  description:
    "Create your account to start planning trips with your AI travel agent.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
