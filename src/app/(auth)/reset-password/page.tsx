import ResetPassword from "@/components/modules/ResetPassword/Main";
import { Suspense } from "react";

function Page() {
  return (
    <Suspense>
      <ResetPassword />;
    </Suspense>
  );
}

export default Page;
