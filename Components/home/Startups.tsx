import React from "react";
// import SliderMenu from "@/Components/misc/SliderMenu";
import Image from "next/image";
import Link from "next/link";
export default function Startups() {
    const startups = [
        {
            "id": 1,
            "name": "دیاکو",
            "logo": "/static/images/startups/diaco.png",
            "link": "https://www.diaco.ir/",
        },
        {
            "id": 2,
            "name": "لاندا تریپ",
            "logo": "/static/images/startups/landa-trip.png",
            "link": "https://landatrip.com/",
        },
        {
            "id": 3,
            "name": "لاندا تریپ",
            "logo": "/static/images/startups/landa-trip.png",
            "link": "https://landatrip.com/",
        },
    ]
    // Render the component
    return (
        <div className="bg-gray-50 dark:bg-neutral-900" id="startups">
            <h2 className="text-4xl font-bold text-center text-black dark:text-white">استارتاپ های ما</h2>
            {/* Render a container for the component */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                {/* TODO: Replace this comment with a request to the backend to fetch data */}
            </div>
            {/* Render the SliderMenu component with the fetched data */}
            <div className="flex items-center justify-center">
                {startups.map((startup) => (
                    <Link href={startup.link} key={startup.id}>
                        <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden p-4 m-2 md:p-10 ">
                            <Image src={startup.logo} alt={startup.name} quality={30} width={100} height={100} />
                            <div className="p-4 text-center">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{startup.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}