import Profile from "@/components/modules/Profile/Main";

export default function Page({
  params,
}: {
  readonly params: { profileHash: string };
}) {
  return <Profile profileHash={params.profileHash} />;
}
