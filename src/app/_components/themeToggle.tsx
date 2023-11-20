"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="w-1 rounded-lg bg-vanila p-2 px-8 text-2xl transition-all duration-300 hover:bg-vanila-dark dark:bg-gray dark:hover:bg-gray flex justify-center items-center"
    >
      <p>{theme == "dark" ? "☀️" : "🌙"}</p>
    </button>
  );
};
