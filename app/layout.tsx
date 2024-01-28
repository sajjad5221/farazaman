import './globals.css'; // Import global CSS file
import Script from 'next/script';
import React from 'react';
import Footer from '@/Components/footer/Footer';
import Navbar from '@/Components/home/Navbar';

// Define metadata object
export const metadata = {
  title: 'Farazaman | فرازمان',
  description: 'Generated by create next app',
};

// Define RootLayout component
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

      {/* Define HTML element with direction and language attributes */}
      <html dir="rtl" lang="fa" className="bg-gray-50">
        {/* Define body element with font family */}
        <body className="font-yakan">
          <Navbar />
          {/* Render children passed to RootLayout component */}
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
