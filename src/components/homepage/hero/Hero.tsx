import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import TypedParagraph from "./TypedParagraph";
import Button from "../../ui/Button";
import Image from "next/image";
import SlideUp from "@/components/animatedComponents/SlideUp";
import RotatingBorder from "@/components/animatedComponents/RotatingBorder";
import { prisma } from "../../../../lib/prisma";

const Hero = async () => {
  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex mt-20 mb-40">
      <section className=" w-1/2 pt-5 flex flex-col space-y-5 ">
        <SlideUp className="flex flex-col space-y-1">
          <h2 className="text-2xl font-bold">FullStack Developer</h2>
          <h1 className="text-8xl/19 font-bold">
            Hello, I&apos;m <br />
            <span className="text-heading">Pawan Bhandari</span>
          </h1>
        </SlideUp>
        <div>
          {blogs[0].title}
          <span>
            <TypedParagraph />
          </span>
        </div>

        <div className="flex flex-col space-y-20  px-2">
          <Button variant="ghost">Contact Me</Button>

          <div className="flex space-x-7">
            <Link href="/">
              <FaGithub size={40} />
            </Link>
            <Link href="/">
              <FaLinkedin size={40} />
            </Link>
            <Link href="/">
              <FaInstagram size={40} />
            </Link>
            <Link href="/">
              <FaFacebook size={40} />
            </Link>
          </div>
        </div>
      </section>
      <section className=" w-1/2 flex justify-center items-center ">
        <SlideUp>
          <RotatingBorder className="w-[350px] h-[350px]">
            <Image
              src="/images/hero.png"
              height={350}
              width={350}
              alt="hero"
              className="rounded-full object-cover"
            />
          </RotatingBorder>
        </SlideUp>
      </section>
    </div>
  );
};

export default Hero;
