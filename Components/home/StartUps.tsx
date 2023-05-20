import React from "react";
import ScrollMenu from "../ScrollMenu";
import Card from "../Card";

export default function StartUps() {
  const items = [
    {
      id: 1,
      name: "Card 1",
      image: "https://flowbite.com/docs/images/logo.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Card 2",
      image: "https://flowbite.com/docs/images/logo.svg",
      description:
        "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
      id: 2,
      name: "Card 2",
      image: "https://flowbite.com/docs/images/logo.svg",
      description:
        "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
      id: 2,
      name: "Card 2",
      image: "https://flowbite.com/docs/images/logo.svg",
      description:
        "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
      id: 2,
      name: "Card 2",
      image: "https://flowbite.com/docs/images/logo.svg",
      description:
        "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
      id: 2,
      name: "Card 2",
      image: "https://flowbite.com/docs/images/logo.svg",
      description:
        "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
      id: 2,
      name: "Card 2",
      image: "https://flowbite.com/docs/images/logo.svg",
      description:
        "Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    // Add more items as needed
  ];
  return (
    <div className="my-16">
      <ScrollMenu title="استارت آپ ها">
        {items.map((item) => (
          <Card
            key={item.id}
            logo={item.image}
            name={item.name}
            paragraph={item.description}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}
