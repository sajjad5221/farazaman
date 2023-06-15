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
<div className="px-1 py-8">
          <h2 className="text-lg font-bold text-black dark:text-white">
            ارتباط با شتابدهنده فرازمان
          </h2>
          <p className="max-w-sm mt-4 mb-4 text-gray-600 dark:text-neutral-400">
            برای ارتباط با تیم شتابدهنده فرازمان میتوانیداز طریق پر کردن فرم
            روبه رو یا روش های زیر اقدام نمایید.
          </p>

          <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-neutral-400">
            <span className="text-gray-600 dark:text-neutral-400">
              ایران-اصفهان-خیابان سعادت آباد-مجتمع طلا- واحد c
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