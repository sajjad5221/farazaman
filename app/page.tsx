import Customers from "@/Components/Customers";
import Faq from "@/Components/Faqs";
import { Features } from "@/Components/Features";
import { Hero } from "@/Components/Hero";
import Pricing from "@/Components/Pricing";
import { Services } from "@/Components/Services";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col my-10">
        <Hero />
        <Services />
        <Features />
        <Pricing />
        <Faq />
        <Customers />
      </div>
    </main>
  );
}
