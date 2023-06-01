import Image from "next/image";
import Link from "next/link";
import React from "react";
const ClickableCard = ({
  id,
  logo,
  name,
  paragraph,
}: {
  id: string;
  logo: string;
  name: string;
  paragraph: string;
}) => {
  return (
    <Link
      href={"/startups/" + id}
      className="inline-block w-64 p-4 bg-slate hover:border-blue-500 border-2 border-transparent rounded shadow-md transition-colors duration-300"
    >
      <div className="text-center">
        <Image
          src={logo}
          alt={logo}
          className="rounded-full mx-auto mb-2 w-16 h-16"
          height={50}
          width={50}
        />
        <span className="text-lg font-bold text-gray-700">{name}</span>
        <p className="text-sm text-muted text-gray-700">{paragraph}</p>
      </div>
    </Link>
  );
};

export default ClickableCard;
