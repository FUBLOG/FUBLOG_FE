import AuthLayout from "@/components/core/layouts/AuthLayout";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
