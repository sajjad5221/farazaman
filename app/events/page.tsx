import React from "react";
import tumbnailImage from "../public/img.jpg";
import Cards from "../../Components/EventCards"


// Event Component for show list of events crad
export default function Events() {

  // test props information
  let title: string = "استارتاپ";
  let image: any = tumbnailImage;
  let description: string = "این یک توضیحات یک استارتاپ است";

  let cards = new Array(Cards({title,image,description}), Cards({title,image,description}), Cards({title,image,description}),Cards({title,image,description}), Cards({title,image,description}), Cards({title,image,description}));
  let card: any;
  return (
    <div className="flex flex-row flex-wrap justify-around">
      {cards.map((card) => (
        <div className="basis-1/3 justify-around  pl-12">{card}</div>
      ))}
    </div>
  );
}
