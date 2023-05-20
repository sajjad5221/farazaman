import Image from "next/image";
import React from "react";

export default function SharedWorkspace() {
  return (
    <div className="flex flex-row justify-around items-center">
      <p>sample paragraph</p>
      <Image
        draggable="false"
        src={"https://flowbite.com/docs/images/logo.svg"}
        alt="logo"
        width={200}
        height={200}
      />
    </div>
  );
}
