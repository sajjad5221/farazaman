import Customers from "@/Components/home/Customers";
import Faq from "@/Components/home/Faqs";
import { Features } from "@/Components/home/Features";
import { Hero } from "@/Components/home/Hero";
import Pricing from "@/Components/misc/StartUps";
import { Services } from "@/Components/misc/Services";
import React, { Suspense } from "react";
import SliderMenu from "@/Components/misc/SliderMenu";
import ErrorBoundary from "@/Components/Boundaries/ErrorBoundry";
import Loading from "./loading";

export default function Home() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <main>
          <div className="flex flex-col mt-10">
            {/* TODO: components names are wrong. like Hero! */}
            <Hero />
            <Services />
            <Features />
            <Pricing />
            <Faq />
            {/* TODO: create a component like Features for below like:  */}
            <SliderMenu
              type="exp"
              title="تجربه استخدامی ها"
              description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز"
            />
            <Customers />
            <div className="border-t border-neutral-800 mx-16 "></div>
          </div>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
