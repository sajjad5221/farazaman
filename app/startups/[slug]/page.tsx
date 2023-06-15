import React from "react";
import FetchApi from "@/Services/Fetch";
import Carousel from "@/Components/Carousel";

export default async function page(context: any) {
  const id = context.params?.slug as string | undefined;
  const startupData = await FetchApi(
    ` http://127.0.0.1:8000/startups/${id}`
  );

  return (
    <div className="flex flex-col items-center py-28 bg-gray-50 dark:bg-neutral-900">
      <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
        <img
          className="w-full h-full object-cover"
          src={startupData.logo}
          alt="Placeholder"
        />
      </div>
      <h2 className="text-2xl font-bold text-black dark:text-white">
        {startupData.name}
      </h2>
      <p className="text-lg text-gray-600 my-4 mx-5 mt-5">
        {startupData.description}
      </p>

      <Carousel />

      <div className="relative rounded-lg overflow-x-auto w-10/12">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-l text-gray-900 whitespace-nowrap dark:text-white"
              >
                بودجه
              </th>
              <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                {startupData.budget}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-l text-gray-900 whitespace-nowrap dark:text-white"
              >
                اعضا
              </th>
              <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                {startupData.members}
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-l text-gray-900 whitespace-nowrap dark:text-white"
              >
                سرمایه
              </th>
              <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-gray-400">
                {startupData.fund}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
