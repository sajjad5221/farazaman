import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  alt,
}) => {
  return (
    <div>
      <div className="flex justify-center mx-auto h-35 w-35 ">
        <Image
          src={image}
          alt={alt}
          width={150}
          height={150}
          quality={75}
          sizes="100vw"
          priority
        />
      </div>
      <h2 className="py-3 text-lg font-bold text-center text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <p className="text-base text-center text-gray-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
