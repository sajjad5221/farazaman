"use client";
import React from "react";
import SliderMenu from "./SliderMenu";

export default function Pricing() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="startups">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"></div>
      {/* TODO: We must create request to backend form here and then pass data to SliderMenu as props. It's wrong now. we are creating this request in SliderMenu for startups and expreinces */}
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
