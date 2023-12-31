"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const getSelected = (path: string) => {
  const pathSplited = path?.split("/");
  return pathSplited?.[pathSplited.length - 1];
};

export default function TopArtistsNav() {
  const path = usePathname();
  const [selected, setSelected] = useState(getSelected(path));

  const buttonStyle =
    "p-2 rounded-md text-sm hover:text-vanila-bright duration-300 hover:bg-vanila-dark dark:hover:bg-gray font-bold w-full flex justify-center items-center";
  const selectedStyle =
    "bg-vanila dark:bg-gray dark:text-vanila-bright " + buttonStyle;

  return (
    <header className="sticky top-0 z-10 flex w-full justify-between bg-white p-2 dark:bg-black">
      <h1 className="text-3xl sm:text-4xl font-bold dark:text-vanila-bright">
        Top Artists
      </h1>
      <div className="flex gap-2">
        <Link
          href="/artist/top/long_term"
          className={selected === "long_term" ? selectedStyle : buttonStyle}
          onClick={() => setSelected("long_term")}
        >
          All Time
        </Link>
        <Link
          href="/artist/top/medium_term"
          className={selected === "medium_term" ? selectedStyle : buttonStyle}
          onClick={() => setSelected("medium_term")}
        >
          Last 6 Months
        </Link>
        <Link
          href="/artist/top/short_term"
          className={selected === "short_term" ? selectedStyle : buttonStyle}
          onClick={() => setSelected("short_term")}
        >
          Last 4 Weeks
        </Link>
      </div>
    </header>
  );
}
