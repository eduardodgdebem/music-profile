"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const getSelected = () => {
  const path = usePathname();
  return path?.split("/")?.[1] || "/";
};

export const Nav = () => {
  const [selected, setSelected] = useState(getSelected());

  const buttonStyle = "p-2 rounded-lg text-sm hover:bg-gray duration-300 h-fit";
  const selectedStyle = "bg-gray-dark  " + buttonStyle;

  const onSelect = (selected: string) => {
    setSelected(selected);
  };

  return (
    <nav className="text-vanila-bright from-purple  to-gray-dark flex flex-col gap-2 rounded-lg bg-gradient-to-b p-2 opacity-[0.95] duration-300 hover:opacity-100 max-sm:max-h-fit max-sm:flex-row max-sm:justify-between max-sm:bg-gradient-to-l sm:h-[calc(100vh-1rem)]">
      <Link
        href="/"
        className={selected === "home" ? selectedStyle : buttonStyle}
        onClick={() => onSelect("home")}
      >
        HOME
      </Link>
      <Link
        href="/artist/top/mediumTerm"
        className={selected === "artist" ? selectedStyle : buttonStyle}
        onClick={() => onSelect("artist")}
      >
        TOP ARTISTS
      </Link>
      <Link
        href="/track/top/mediumTerm"
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
    </nav>
  );
};
