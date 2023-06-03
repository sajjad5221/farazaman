'use client'
import "./globals.css";
import Script from "next/script";
import React from "react";
import Footer from "@/Components/footer/Footer";
import Navbar from "@/Components/Navbar";
import { ThemeProvider } from "next-themes";

// export const metadata = {
//   title: "Farazamin",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
        strategy="afterInteractive"
      />

      <html dir="rtl" lang="en">
        <body className="font-yakan bg-gray-50 drak: bg-transparent">
          <ThemeProvider attribute="class">
            <Navbar />
          </ThemeProvider>
          <div className="mb-3">
            <ThemeProvider attribute="class">{children}</ThemeProvider>
          </div>
          <ThemeProvider attribute="class">
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
