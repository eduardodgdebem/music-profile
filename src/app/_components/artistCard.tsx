import Image from "next/image";
import Link from "next/link";
import { artistType } from "~/server/api/routers/spotify.types";

export default function ArtistCard({ artist }: { artist: artistType }) {
  const img = artist.images[2];

  return (
    <Link
      href={`/artist/${artist.id}`}
      className="text-vanila relative m-2 overflow-hidden font-medium duration-300 hover:text-white "
    >
      <header className="aspect-square h-[160px] overflow-hidden bg-red-700 ">
        <Image
          src={img.url}
          width={img.width}
          height={img.height}
          alt={`Picture of ${artist.name}`}
          className="h-full object-cover drop-shadow-xl duration-300 hover:opacity-50"
        />
      </header>
      <div className="w-full py-2">
        <h3 className="text-gray-dark dark:text-vanila-bright">
          {artist.name}
        </h3>
      </div>
    </Link>
  );
}
