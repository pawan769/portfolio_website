"use client";
import Heading from "@/components/ui/Heading";
import React from "react";
import { motion } from "framer-motion";
import { inter } from "@/lib/fonts";

const Aboutme = () => {
  const skills = [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript",
    },
    { title: "Backend Development", description: "Node.js, Express, MongoDB" },
    { title: "UI/UX Design", description: "Figma, Adobe XD, Tailwind CSS" },
    { title: "Problem Solving", description: "Data Structures, Algorithms" },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Company",
      duration: "2022 - Present",
      description:
        "Led development of multiple web applications using modern technologies.",
    },
    {
      title: "Frontend Developer",
      company: "Design Agency",
      duration: "2021 - 2022",
      description: "Worked on responsive and interactive user interfaces.",
    },
  ];

  return (
    <div className="space-y-8">
      <Heading text="Little Bit About Me!" />

      {/* Main About Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card rounded-lg p-6 shadow-lg"
      >
        <p className={`text-muted-foreground leading-relaxed ${inter.className}`}>
          I am a passionate full-stack developer with a keen eye for design and
          a love for creating seamless user experiences. With expertise in
          modern web technologies, I specialize in building responsive and
          performant applications that solve real-world problems.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm">{skill.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-card rounded-lg p-6 shadow-lg"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-xl">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground">
                {exp.duration}
              </span>
            </div>
            <p className="text-muted-foreground">{exp.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-card rounded-lg p-6 shadow-lg"
      >
        <h3 className="font-semibold text-xl mb-4">What I Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium mb-2">Development</h4>
            <p className="text-muted-foreground">
              Building scalable web applications with modern technologies and
              best practices.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Design</h4>
            <p className="text-muted-foreground">
              Creating intuitive and beautiful user interfaces that enhance user
              experience.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutme;
