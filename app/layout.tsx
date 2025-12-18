import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppKitProvider from "@/src/components/appkit";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basyc Dao",
  description: "stability engineered by supply intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppKitProvider>
          <Toaster />
          {children}
        </AppKitProvider>
      </body>
    </html>
  );
}
