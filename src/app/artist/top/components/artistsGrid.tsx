"use client";

import ArtistCard from "../../../_components/artistCard";
import type { artistType } from "~/server/api/routers/spotify.types";

export default function ArtistGrid({ artists }: { artists: artistType[] }) {
  return (
    <section>
      <div className="grid h-full w-full grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] justify-items-center gap-4">
        {artists?.map((artist, i) => (
          <ArtistCard artist={artist} key={i + artist.id} />
        ))}
      </div>
    </section>
  );
}
