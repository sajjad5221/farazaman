import React from "react";
import Slider from "../Components/Slider"
import Table from "../Components/Table"

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

      <Table/>
      
    </div>
  );
}
