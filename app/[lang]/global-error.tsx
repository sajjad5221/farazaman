"use client"

import Router from "next/router";
import React from "react";

export default function Error() {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={Router.reload}>Try again</button>
    </div>
  );
}