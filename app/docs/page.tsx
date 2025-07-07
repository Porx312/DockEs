"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <a
        href={`/docs/docs/getting-started/introduction`}
        className="text-blue-500 hover:underline"
      >
        Docs
      </a>
      <a
        href={`/docs/zustand/nextjs/introduction`}
        className="text-blue-500 hover:underline"
      >
        Zustand
      </a>
    </div>
  );
};

export default page;
