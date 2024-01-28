import React from 'react';
import FetchApi from '@/Services/Fetch';
import Carousel from '@/Components/home/Carousel';
import Image from 'next/image';
import GetFiles from '@/Services/GetFileNames';

export default async function page(context: any) {
  const id = context.params?.slug as number | undefined;
  const startupData = await FetchApi(` http://127.0.0.1:8000/startups/${id}`);
  const imageRoute = '/static/images/startups/' + id + '/';

  // const folderPath = "public/static/images/startups/1/";

  const files = GetFiles(id);
  let imageUrl;
  // let images:string[] = [];
  // {files.map((image) => (
  //   imageUrl = "/static/images/startups/" + id + "/" + image;
  // ))}

  const images = [
    '/static/images/startups/1/1.jpg',
    '/static/images/startups/1/2.jpg',
    '/static/images/startups/1/3.jpg',
    '/static/images/startups/1/4.jpg',
  ];

  return (
    <div className="flex flex-col items-center py-28 bg-gray-50">
      <div className="rounded-full overflow-hidden w-40 h-40 mb-4">
        <img
          className="w-full h-full object-cover"
          src={startupData.logo}
          alt="Placeholder"
        />
      </div>
      <div>
        <div></div>
      </div>
      <h2 className="text-2xl font-bold text-black  ">{startupData.name}</h2>
      <p className="text-lg text-gray-600 my-4 mx-5 mt-5">
        {startupData.description}
      </p>

      <Carousel images={images} />

      <div className="relative rounded-lg overflow-x-auto w-10/12">
        <table className="w-full text-sm text-gray-500">
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-l text-gray-900 whitespace-nowrap"
              >
                بودجه
              </th>
              <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                {startupData.budget}
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-l text-gray-900 whitespace-nowrap"
              >
                اعضا
              </th>
              <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                {startupData.members}
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium border-l text-gray-900 whitespace-nowrap"
              >
                سرمایه
              </th>
              <td className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap">
                {startupData.fund}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
