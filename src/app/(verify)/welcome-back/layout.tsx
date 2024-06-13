import VerifyLayout from "@/components/core/layouts/VerifyLayout";
export default async function LayoutAuth({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <VerifyLayout>{children}</VerifyLayout>;
}
