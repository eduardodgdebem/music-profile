import Image from "next/image";
import Link from "next/link";
import { trackType } from "~/server/api/routers/spotify.types";
import TrackRow from "./trackRow";

export default function TracksGrid({ tracks }: { tracks: trackType[] }) {
  return (
    <section className="w-full">
      <div className="grid h-full w-full grid-cols-1 gap-3">
        {tracks.map((track, i) => (
          <TrackRow track={track} key={i} />
        ))}
      </div>
    </section>
  );
}
