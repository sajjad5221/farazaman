import React from "react";
import Slider from "../Components/Slider"
export default function StartUpsDetails({
  slug,
  slugTable,
}: {
  slug: string;
  slugTable: string;
}) {
  return (
    <div className="container">
      <Slider/>
      
    </div>
  );
}
