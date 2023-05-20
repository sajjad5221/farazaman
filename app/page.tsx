import AboutUs from "@/Components/home/AboutUs";
import SharedWorkspace from "@/Components/home/SharedWorkspace";
import StartUps from "@/Components/home/StartUps";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <AboutUs />
        <StartUps />
        <SharedWorkspace />
      </div>
    </main>
  );
}
