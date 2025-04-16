"use client";
import { TypeAnimation } from "react-type-animation";

const TypedParagraph = () => {
  return (
    <TypeAnimation
      sequence={[
        "We produce food for Mice",
        1000,
        "We produce food for Hamsters",
        1000,
        "We produce food for Guinea Pigs",
        1000,
        "We produce food for Chinchillas",
        1000,
      ]}
      speed={50}
      style={{ fontSize: "1em" }}
      repeat={Infinity}
    />
  );
};

export default TypedParagraph;
