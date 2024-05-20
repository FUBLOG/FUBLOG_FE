import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ProviderComponents from "./provider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ProviderComponents>{children}</ProviderComponents>
      </body>
    </html>
  );
}