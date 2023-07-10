import React from "react";

export default function FormsDetails({
  title,
  description,
}: {
  title: string;
  description: string;
})
{
  return (
<div className="px-8 py-8 md:order-last lg:order-first max-[768px]:order-last">
          <h2 className="text-lg font-bold text-black dark:text-white">
            {title}
          </h2>
          <p className="max-w-sm mt-4 mb-4 text-gray-600 dark:text-neutral-400">
            {description}
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
            <span className="text-gray-600 dark:text-neutral-400">
              ایران-اصفهان-خیابان سعادت آباد-مجتمع طلا- طبقه 5 - واحد c
            </span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-600 dark:text-neutral-400">
            <a href="mailto:hello@halley.vercel.app">farazaman@gmail.com</a>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-gray-600 text-dark-600 dark:text-neutral-400">
            <a href="tel:0313313155">0313313155</a>
          </div>
    </div>
  );

}