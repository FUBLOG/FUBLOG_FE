import Profile from "@/components/modules/Profile/Main";

export default function Page({
  params,
}: {
  params: { readonly profileHash: string };
}) {
  return <Profile profileHash={params.profileHash} />;
}
