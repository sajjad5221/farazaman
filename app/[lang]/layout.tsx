import './globals.css'; // Import global CSS file
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS first
import 'react-toastify/dist/ReactToastify.css'; // Then import React Toastify CSS
import Script from 'next/script';
import React from 'react';
import Footer from '@/Components/footer/Footer';
import Navbar from '@/Components/home/Navbar';
import { languages } from '../i18n/setting';
import { useLang } from '@/stores/langStore';
import { dir } from 'i18next';
import NavBarRefactor from '@/Components/home/NavBarRefactor';

// Define metadata object
export const metadata = {
  title: 'Farazaman | فرازمان',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}
// Define RootLayout component
export default function RootLayout({
  params: { lang },
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {

  // useLang.setState({
  //   lang: lang
  // })

  useLang.getState().setLanguage(lang);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"
        strategy="afterInteractive"
      />

      {/* Define HTML element with direction and language attributes */}
      <html lang={lang} dir={dir(lang)}>
        {/* Define body element with font family */}
        <body className="font-yakan bg-gray-50">
          {/* <Navbar lang={lang} /> */}
          <NavBarRefactor />
          {/* Render children passed to RootLayout component */}
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
