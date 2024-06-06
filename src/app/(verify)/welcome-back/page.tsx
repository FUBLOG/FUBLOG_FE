"use client";
import Welcome from "@/components/modules/Welcome/Main";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <Welcome />
    </Suspense>
  );
}
