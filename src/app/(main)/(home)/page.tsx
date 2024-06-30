import Home from "@/components/modules/Home/Main";
import { Suspense } from "react";

function Page() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}

export default Page;
