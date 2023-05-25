"use client"
import Link from "next/link";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import SliderMenu from "./SliderMenu";


type BillingInterval = "year" | "month";

export default function Pricing() {
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("month");
  return (
    <div className="bg-gray-50 dark:bg-neutral-900" id="startups">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <h2 className="text-4xl font-bold text-center">استارت آپ ها</h2>

        <p className="pt-6 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 sm:flex sm:flex-col sm:align-center">
        <div className="relative self-center text-base font-semibold mt-6 bg-neutral-200  dark:bg-neutral-800 rounded-lg flex sm:mt-8">
          <button
            onClick={() => setBillingInterval("month")}
            type="button"
            className={`${
              billingInterval === "month"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
           انجام شده
          </button>
          <button
            onClick={() => setBillingInterval("year")}
            type="button"
            className={`${
              billingInterval === "year"
                ? "relative w-1/2 bg-white dark:bg-neutral-600 text-neutral-900 dark:text-neutral-100"
                : "ml-0.5 relative w-1/2 text-neutral-900 dark:text-neutral-400"
            } rounded-md m-1 py-2 whitespace-nowrap sm:w-auto sm:px-8`}
          >
            در حال انجام
          </button>
        </div>
      </div>

      <div className="">
        <SliderMenu/>
      </div>
    </div>
  );
}
