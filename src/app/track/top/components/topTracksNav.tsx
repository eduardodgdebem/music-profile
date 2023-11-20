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
    "p-2 rounded-md text-sm hover:text-vanila-bright duration-300 hover:bg-vanila-dark dark:hover:bg-gray font-bold";
  const selectedStyle =
    "bg-vanila dark:bg-gray dark:text-vanila-bright " + buttonStyle;

  return (
    <header className="flex w-full justify-between p-2">
      <h1 className="text-4xl font-bold dark:text-vanila-bright">Top Tracks</h1>
      <div className="flex gap-2">
        <Link
          href="/track/top/long_term"
          className={selected === "long_term" ? selectedStyle : buttonStyle}
          onClick={() => setSelected("long_term")}
        >
          All Time
        </Link>
        <Link
          href="/track/top/medium_term"
          className={selected === "medium_term" ? selectedStyle : buttonStyle}
          onClick={() => setSelected("medium_term")}
        >
          Last 6 Months
        </Link>
        <Link
          href="/track/top/short_term"
          className={selected === "short_term" ? selectedStyle : buttonStyle}
          onClick={() => setSelected("short_term")}
        >
          Last 4 Weeks
        </Link>
      </div>
    </header>
  );
}
