import React from "react";
import SliderMenu from "@/Components/misc/SliderMenu";

export default function Pricing() {
  // Render the component
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="startups">
      {/* Render a container for the component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* TODO: Replace this comment with a request to the backend to fetch data */}
      </div>
      {/* Render the SliderMenu component with the fetched data */}
      <div className="">
        <SliderMenu
          StartUpsProps={true}
          type="notExp"
          title="استارت آپ ها"
          description="پروژه های استارتاپی که با ما همکاری داشته اند."
        />
      </div>
    </div>
  );
}