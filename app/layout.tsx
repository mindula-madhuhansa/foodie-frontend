import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Foodie",
  description: "Find the best food in town",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="bg-gray-50 min-h-screen">
          <Header />
          <main className="flex flex-col max-w-screen-2xl mx-auto w-full p-6 lg:p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
