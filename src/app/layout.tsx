import type { Metadata } from "next";
import { Lora } from "next/font/google";

import ProviderComponents from "./provider";
import Icon from "@ant-design/icons/lib/components/Icon";

const lora = Lora({ subsets: ["latin"] });

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
        <link rel="icon" href="/favicon.png" />
        <ProviderComponents>{children}</ProviderComponents>
      </body>
    </html>
  );
}
