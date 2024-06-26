import React from "react";
import Profile from "@/components/modules/Profile/Main";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Profile />
    </Suspense>
  );
}
