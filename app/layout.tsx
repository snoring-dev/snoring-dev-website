import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

import "./globals.css";
import ClientOnly from "@/components/client-only";
import ContactModal from "@/components/contact-modal";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ContactModal />
        </ClientOnly>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
