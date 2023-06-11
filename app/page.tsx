import Customers from "@/Components/Customers";
import Faq from "@/Components/Faqs";
import { Features } from "@/Components/Features";
import { Hero } from "@/Components/Hero";
import Pricing from "@/Components/StartUps";
import { Services } from "@/Components/Services";
import React, { Suspense } from "react";
import SliderMenu from "@/Components/SliderMenu";
import ErrorBoundary from "@/Components/ErrorBoundry";
import Loading from "./loading";

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading/>}>
        <main>
          <div className="flex flex-col mt-10">
            <Hero />
            <Services />
            <Features />
            <Pricing />
            <Faq />
            <SliderMenu
              type="exp"
              title="تجربه استخدامی ها"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
            />
            <Customers />
          </div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
