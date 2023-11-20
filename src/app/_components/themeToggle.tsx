"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const {systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }


  return (
    <button
      onClick={() =>
        theme == "dark" ? setTheme("light") : setTheme("dark")
      }
      className="w-min bg-vanila dark:bg-gray hover:bg-vanila-dark dark:hover:bg-gray rounded-lg px-8 p-2 text-3xl transition-all duration-300"
    >
      {theme == "dark" ? "☀️" : "🌙" }
    </button>
  );
};
