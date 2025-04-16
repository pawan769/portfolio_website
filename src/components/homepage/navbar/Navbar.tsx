import ThemeButton from "@/components/homepage/navbar/ThemeButton";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 space-x-5">
      <Image
        src="/images/portfolio_logo.png"
        alt="logo"
        width={100}
        height={100}
        priority
      />
      <div className=" space-x-7 hidden lg:flex justify-between items-center">
        <Link href="/#about">About</Link>
        <Link href="/#experience">Experience</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
        <Button>Download CV</Button>
      </div>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
