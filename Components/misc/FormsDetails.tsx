import Link from 'next/link';
import React from 'react';

/**
 * A component that displays details about a form
 * @param {string} title - The title of the form
 * @param {string} description - The description of the form
 * @returns {JSX.Element} - A div containing the form details
 */
export default function FormsDetails({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element {
  return (
    <div className="px-8 py-8 md:order-last lg:order-first max-[768px]:order-last">
      {/* Form title */}
      <h2 className="text-lg font-bold text-black  ">{title}</h2>

      {/* Form description */}
      <p className="max-w-sm mt-4 mb-4 text-gray-600   text-justify">
        {description}
      </p>

      {/* Form address */}
      <div className="flex items-center mt-8 space-x-2 text-dark-600  ">
        <span className="text-gray-600  ">
          ایران-اصفهان-خیابان سعادت آباد-مجتمع طلا- طبقه 5 - واحد c
        </span>
      </div>

      {/* Form email */}
      <div className="flex items-center mt-2 space-x-2 text-gray-600  ">
        <Link href="mailto:hello@halley.vercel.app">farazaman@gmail.com</Link>
      </div>

      {/* Form phone number */}
      <div className="flex items-center mt-2 space-x-2 text-gray-600 text-dark-600  ">
        <Link href="tel:0313313155">0313313155</Link>
      </div>
    </div>
  );
}
