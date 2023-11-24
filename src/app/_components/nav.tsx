"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ThemeToggle } from "./themeToggle";
import { SpotifySvg } from "./svg/spotifySvg";

const MicSvg = () => {
  return (
    <svg
      className="h-8 dark:fill-vanila max-sm:h-6" 
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 47.5 47.5"
      // xml:space="preserve"
    >
      <title>Microphone</title>
      <g>
        <path d="M44.159,3.341C41.932,1.115,39.013,0,36.093,0c-2.919,0-5.838,1.114-8.064,3.341c-4.454,4.454-4.454,11.677,0,16.131     c2.227,2.227,5.146,3.341,8.064,3.341s5.839-1.114,8.066-3.341C48.613,15.019,48.613,7.796,44.159,3.341z"></path>
        <path d="M22.161,14.999L0.646,39.161c-0.9,1.011-0.854,2.604,0.103,3.562l1.132,1.133L1.158,44.58     c-0.477,0.477-0.477,1.256,0,1.731l0.108,0.108c0.477,0.478,1.256,0.478,1.733,0l0.723-0.724l1.055,1.055     c0.957,0.957,2.552,1.003,3.563,0.104l24.155-21.509c-2.469-0.633-4.739-1.902-6.589-3.752     C24.019,19.706,22.779,17.416,22.161,14.999z M21.02,29.268l-5.145,5.146c-0.77,0.771-2.018,0.771-2.787,0     c-0.769-0.771-0.77-2.02,0-2.787l5.145-5.146c0.77-0.771,2.018-0.771,2.787,0C21.789,27.251,21.79,28.499,21.02,29.268z"></path>
      </g>
    </svg>
  );
};

const NoteSvg = () => {
  return (
    <svg
      className="h-8 dark:fill-vanila max-sm:h-6" 
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 489.164 489.164"
      // xml:space="preserve"
    >
      <path d="M159.582,75.459v285.32c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5s37.009,72.5,82.5,72.5 s82.5-32.523,82.5-72.5V168.942l245-60.615v184.416c-14.274-10.374-32.573-16.616-52.5-16.616c-45.491,0-82.5,32.523-82.5,72.5 s37.009,72.5,82.5,72.5s82.5-32.523,82.5-72.5V0L159.582,75.459z"></path>
    </svg>
  );
};

const PlaylistSvg = () => {
  return (
    <svg
      className="h-8 dark:fill-vanila max-sm:h-6"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 405.333 405.333"
      // xml:space="preserve"
    >
      <g>
        <rect x="0" y="53.333" width="256" height="42.667"></rect>
        <rect x="0" y="138.667" width="256" height="42.667"></rect>
        <path d="M298.667,53.333v174.613c-6.72-2.453-13.76-3.947-21.333-3.947c-35.307,0-64,28.693-64,64c0,35.307,28.693,64,64,64     c35.307,0,64-28.693,64-64V96h64V53.333H298.667z"></path>
        <rect x="0" y="224" width="170.667" height="42.667"></rect>
      </g>
    </svg>
  );
};

const getSelected = (path: string) => {
  return path?.split("/")?.[1] ?? "/";
};

export const Nav = () => {
  const path = usePathname();
  const [selected, setSelected] = useState(getSelected(path));

  const buttonStyle =
    "p-4 rounded-md text-sm dark:hover:bg-gray hover:bg-vanila-dark duration-300 h-fit font-bold max-sm:text-xs";
  const selectedStyle = "dark:bg-gray-dark bg-vanila " + buttonStyle;

  const onSelect = (selected: string) => {
    setSelected(selected);
  };

  return (
    <nav className="sm:w-fit flex flex-col items-center justify-between sm:border-r-2 border-vanila p-2 duration-300 dark:border-gray  max-sm:max-h-fit max-sm:flex-row sm:h-screen">
      <section className="flex flex-col sm:gap-8 max-sm:max-h-fit max-sm:flex-row max-sm:justify-between max-sm:w-full max-sm:h-fit">
        <Link
          href="/"
          className={selected === "home" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("home")}
        >
          <SpotifySvg className="h-8 fill-green-spotify max-sm:h-6"/>
        </Link>
        <Link
          href="/artist/top/medium_term"
          className={selected === "artist" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("artist")}
        >
          {/* TOP ARTISTS */}
          <MicSvg />
        </Link>
        <Link
          href="/track/top/medium_term"
          className={selected === "track" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("track")}
        >
          {/* TOP TRACKS */}
          <NoteSvg />
        </Link>
        <Link
          href="/playlist/all"
          className={selected === "playlist" ? selectedStyle : buttonStyle}
          onClick={() => onSelect("playlist")}
        >
          <PlaylistSvg />
          {/* PLAYLISTS */}
        </Link>
      </section>
      <div className="max-sm:m-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};
