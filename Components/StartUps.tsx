"use client";
import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import SliderMenu from "./SliderMenu";

export default function Pricing() {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="startups">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"></div>

      <div className="">
        <SliderMenu
          StartUpsProps={true}
          type="notExp"
          title="استارت آپ ها"
          description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز

"
        />
      </div>
    </div>
  );
}
