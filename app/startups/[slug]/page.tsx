import React from "react";
import Slider from "../Components/Slider";

export default function page() {
  return (
    <div className="flex flex-col items-center py-16 bg-gray-50 dark:bg-neutral-900">
      <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
        <img
          className="w-full h-full object-cover"
          src="https://via.placeholder.com/200"
          alt="Placeholder"
        />
      </div>
      <h2 className="text-2xl font-bold text-black dark:text-white">{"Company name"}</h2>
      <p className="text-lg text-gray-600 my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        ultrices risus nulla, et dignissim tellus bibendum vel. Nullam non
        facilisis est, at feugiat risus.
      </p>

      <Slider />

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
                data
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
                data
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
                data
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-lg text-gray-600 my-4 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ultrices risus nulla, et dignissim tellus bibendum vel. Nullam non
          facilisis est, at feugiat risus.
        </p>
      </div>
    </div>
  );
}
