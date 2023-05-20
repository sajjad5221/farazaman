import React from "react";
const ClickableCard = ({
  logo,
  name,
  paragraph,
}: {
  logo: string;
  name: string;
  paragraph: string;
}) => {
  return (
    <a
      href="#"
      className="inline-block w-64 p-4 bg-slate hover:border-blue-500 border-2 border-transparent rounded shadow-md transition-colors duration-300"
    >
      <div className="text-center">
        <img
          src={logo}
          alt={logo}
          className="rounded-full mx-auto mb-2 w-16 h-16"
        />
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-muted">{paragraph}</p>
      </div>
    </a>
  );
};

export default ClickableCard;
