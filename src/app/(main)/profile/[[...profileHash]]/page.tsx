import React from "react";
import Profile from "@/components/modules/Profile/Main";

interface PageProps {
  params: {
    profileHash: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return <Profile profileHash={params.profileHash} />;
};

export default Page;
