"use client";

import React from "react";

export default function RootError({ error, reset }) {
  return (
    <div className="bg-gradient-to-b from-[#9c7d9a] to-[#000] ">
      <div className="flex flex-col items-center justify-center h-screen max-w-[1000px] mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-red-600 text-center">
          Oops! Something went wrong.
        </h1>
        <p className="mt-2 text-red-300 text-center">{error.message}</p>
      </div>
    </div>
  );
}
