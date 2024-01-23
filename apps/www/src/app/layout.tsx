import type { Metadata } from "next";
import Script from "next/script";

import "@src/app/globals.css";
import Navbar from "@src/components/ui/navbar";

export const metadata: Metadata = {
  title: "Sample Starter Project",
  description: "A starter project with django, nextjs, and postgres",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </html>
  );
}
