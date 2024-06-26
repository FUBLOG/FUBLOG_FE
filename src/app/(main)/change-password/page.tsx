import ChangePassword from "@/components/modules/ChangePassword/Main";
import { Suspense } from "react";

function Page() {
  return (
    <Suspense>
      <ChangePassword />
    </Suspense>
  );
}

export default Page;
