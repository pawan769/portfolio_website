"use client";

import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { RiMoonFill } from "react-icons/ri";
export default function ThemeButton() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      setTheme("system");
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const updateTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);

    if (newTheme === "system") {
      localStorage.removeItem("theme");
      // Use system preference
      const systemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      document.documentElement.classList.toggle("dark", systemDarkMode);
    } else {
      localStorage.setItem("theme", newTheme);
      // Apply the theme directly
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    }
  };

  // Apply the current theme immediately
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className=" text-sun transition-colors duration-1500"
      onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <MdSunny /> : <RiMoonFill />}
    </button>
  );
}
