import { inter } from "@/lib/fonts";
import React from "react";

const Heading = ({ text }: { text: string }) => {
  return (
    <div
      className={`text-6xl font-bold w-full text-center my-10 ${inter.className} `}
    >
      {text}
    </div>
  );
};

export default Heading;
