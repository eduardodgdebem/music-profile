"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ThemeToggle } from "./themeToggle";

const getSelected = () => {
  const path = usePathname();
  return path?.split("/")?.[1] || "/";
};

export const Nav = () => {
  const [selected, setSelected] = useState(getSelected());

  const buttonStyle =
    "p-2 rounded-md text-sm dark:hover:bg-gray hover:bg-vanila-dark duration-300 h-fit";
  const selectedStyle = "dark:bg-gray-dark bg-vanila " + buttonStyle;

  const onSelect = (selected: string) => {
    setSelected(selected);
  };

  return (
    <nav className="flex flex-col border-r-2 border-vanila dark:border-gray p-2 duration-300 max-sm:max-h-fit max-sm:flex-row justify-between sm:h-screen">
      <section className="flex flex-col gap-2 max-sm:max-h-fit max-sm:flex-row max-sm:justify-between">
        <Link
          href="/"
          className={selected === "home" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("home")}
        >
          HOME
        </Link>
        <Link
          href="/artist/top/medium_term"
          className={selected === "artist" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("artist")}
        >
          TOP ARTISTS
        </Link>
        <Link
          href="/track/top/medium_term"
          className={selected === "track" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("track")}
        >
          TOP TRACKS
        </Link>
        <Link
          href="/recent"
          className={selected === "recent" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("recent")}
        >
          RECENT
        </Link>
        <Link
          href="/playlist/all"
          className={selected === "playlist" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("playlist")}
        >
          PLAYLISTS
        </Link>
      </section>

      <ThemeToggle />
    </nav>
  );
};
