"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ThemeToggle } from "./themeToggle";

const SpotifySvg = () => {
  return (
    <svg
      className="h-8 fill-green-spotify max-sm:h-6"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 427.652 427.652"
      // xml:space="preserve"
    >
      <path d="M213.826,0C95.733,0,0,95.733,0,213.826s95.733,213.826,213.826,213.826 s213.826-95.733,213.826-213.826S331.919,0,213.826,0z M306.886,310.32c-2.719,4.652-7.612,7.246-12.638,7.247 c-2.506,0-5.044-0.645-7.364-2c-38.425-22.456-82.815-26.065-113.295-25.138c-33.763,1.027-58.523,7.692-58.769,7.76 c-7.783,2.126-15.826-2.454-17.961-10.236c-2.134-7.781,2.43-15.819,10.209-17.962c1.116-0.307,27.76-7.544,64.811-8.766 c21.824-0.72,42.834,0.801,62.438,4.52c24.83,4.71,47.48,12.978,67.322,24.574C308.612,294.393,310.96,303.349,306.886,310.32z M334.07,253.861c-3.22,5.511-9.016,8.583-14.97,8.584c-2.968,0-5.975-0.763-8.723-2.369c-45.514-26.6-98.097-30.873-134.2-29.776 c-39.994,1.217-69.323,9.112-69.614,9.192c-9.217,2.515-18.746-2.906-21.275-12.124c-2.528-9.218,2.879-18.738,12.093-21.277 c1.322-0.364,32.882-8.937,76.77-10.384c25.853-0.852,50.739,0.949,73.96,5.354c29.412,5.58,56.241,15.373,79.744,29.108 C336.115,234.995,338.897,245.603,334.07,253.861z M350.781,202.526c-3.641,0-7.329-0.936-10.7-2.906 c-108.207-63.238-248.572-25.643-249.977-25.255c-11.313,3.117-23.008-3.527-26.124-14.839 c-3.117-11.312,3.527-23.008,14.839-26.124c1.621-0.447,40.333-10.962,94.166-12.737c31.713-1.044,62.237,1.164,90.72,6.567 c36.077,6.844,68.987,18.856,97.815,35.704c10.13,5.92,13.543,18.931,7.623,29.061C365.193,198.757,358.084,202.526,350.781,202.526 z"></path>
    </svg>
  );
};

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
          <SpotifySvg />
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
