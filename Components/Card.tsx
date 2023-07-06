import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define the props that the component accepts
type ClickableCardProps = {
  id: string;
  logoUrl: string;
  name: string;
  description: string;
};

// Define the functional component
const ClickableCard: React.FC<ClickableCardProps> = ({
  id,
  logoUrl,
  name,
  description,
}) => {
  // Define the CSS classes for each element of the card
  const cardClassNames =
    "inline-block w-64 p-4 bg-slate hover:border-blue-500 border-2 border-transparent rounded shadow-md transition-colors duration-300";
  const logoClassNames = "rounded-full mx-auto mb-2 w-16 h-16";
  const nameClassNames = "text-lg font-bold text-gray-700";
  const descriptionClassNames = "text-sm text-muted text-gray-700";

  // Render the clickable card element with startup information
  return (
    <Link href={`/startups/${id}`}>
      <a className={cardClassNames}>
        <div className="text-center">
          {/* Display the startup's logo */}
          <Image
            src={logoUrl}
            alt={name}
            className={logoClassNames}
            height={50}
            width={50}
          />
          {/* Display the startup's name */}
          <span className={nameClassNames}>{name}</span>
          {/* Display a short paragraph about the startup */}
          <p className={descriptionClassNames}>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ClickableCard;