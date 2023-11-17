import Link from "next/link";
import { trackType } from "~/server/api/routers/spotify.types";
import Image from "next/image";
import { AngledElement } from "./angledElement";

export default function TrackRow({ track }: { track: trackType }) {
  return (
    <Link href={`/track/${track.id}`} className="flex h-full gap-2 duration-300 hover:opacity-50">
      {track.album?.images[2] && (

          <div >
            <Image
              src={track.album?.images[2].url}
              width={track.album?.images[2].width}
              height={track.album?.images[2].height}
              alt={`Picture of the ${track.name} album`}
              className="aspect-square h-[64px] object-cover rounded-md"
            />
          </div>
      )}
      <div key={track.id}>
        <h3 className="text-xl hover:text-vanila-bright duration-300">{track.name}</h3>
        <p className="text-sm">
          {track.artists.map(({ name }) => name).join(", ")} &#x2022;{" "}
          {track.album.name}
        </p>
      </div>
    </Link>
  );
}
