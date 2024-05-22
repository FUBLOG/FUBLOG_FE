import type { Metadata } from "next";
import { Lora } from "next/font/google";

import ProviderComponents from "./provider";

const lora = Lora({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "HaS - Healing and Sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <ProviderComponents>{children}</ProviderComponents>
      </body>
    </html>
  );
}
