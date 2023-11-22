"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    console.log(theme )
    if(systemTheme)
    setTheme(systemTheme)
    setMounted(true);
  }, []);

  const isDark = () => {
    return theme === "dark" || (theme === "system" && systemTheme === "dark")
  }

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => (isDark() ? setTheme("light") : setTheme("dark"))}
      className="w-1 rounded-lg bg-vanila p-2 px-6 text-2xl  transition-all duration-300 hover:bg-vanila-dark dark:bg-gray dark:hover:bg-gray flex justify-center items-center"
    >
      <p>{isDark() ? "☀️" : "🌙"}</p>
    </button>
  );
};
