"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const getSelected = () => {
  const path = usePathname();
  const pathSplited = path?.split("/")
  return pathSplited?.[pathSplited.length - 1];
};

export default function TopArtistsNav() {
  const [selected, setSelected] = useState(getSelected());

  const buttonStyle = "p-2 rounded-lg text-sm hover:text-vanila-bright duration-300";
  const selectedStyle = "bg-gray-dark text-vanila-bright " + buttonStyle;

  return (
    <>
      <header className="flex w-full justify-between p-2">
        <h1 className="text-vanila-bright text-4xl font-bold">Top Tracks</h1>
        <div className="flex gap-2">
          <Link
            href="/track/top/longTerm"
            className={selected === "longTerm" ? selectedStyle : buttonStyle}
            onClick={() => setSelected("longTerm")}
          >
            All Time
          </Link>
          <Link
            href="/track/top/mediumTerm"
            className={selected === "mediumTerm" ? selectedStyle : buttonStyle}
            onClick={() => setSelected("mediumTerm")}
          >
            Last 6 Months
          </Link>
          <Link
            href="/track/top/shortTerm"
            className={selected === "shortTerm" ? selectedStyle : buttonStyle}
            onClick={() => setSelected("shortTerm")}
          >
            Last 4 Weeks
          </Link>
        </div>
      </header>
    </>
  );
}
