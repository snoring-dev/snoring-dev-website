import { headers } from "next/headers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Med Jemmoudi | @snoring-dev",
  description: "Mohammed Jemmoudi's website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const isResumePage = (new RegExp(/^\/resume\//)).test(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
        {!isResumePage && <Navbar />}
        {children}
      </body>
    </html>
  );
}
