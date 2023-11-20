import Image from "next/image";
import Link from "next/link";
import { artistType } from "~/server/api/routers/spotify.types";

export default function ArtistCard({ artist }: { artist: artistType }) {
  const img = artist.images[2];

  return (
    <Link
      href={`/artist/${artist.id}`}
      className="bg-black font-medium text-vanila hover:text-white relative m-2 overflow-hidden rounded-lg shadow-lg duration-300 "
    >
      <header className="aspect-square h-[160px] overflow-hidden bg-red-700">
        <Image
          src={img.url}
          width={img.width}
          height={img.height}
          alt={`Picture of ${artist.name}`}
          className="h-full object-cover  drop-shadow-xl hover:opacity-50 duration-300"
        />
      </header>
      <div className="pointer-events-none absolute bottom-0 w-full bg-gradient-to-t from-[black] to-[transparent] p-2">
        <h3>{artist.name}</h3>
      </div>
    </Link>
  );
}
