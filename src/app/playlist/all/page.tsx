import { playlistType } from "~/server/api/routers/spotify.types";
import { api } from "~/trpc/server";
import Image from "next/image";
import Link from "next/link";

const PlayListCard = ({ playlist }: { playlist: playlistType }) => {
  const image = playlist.images[1] ?? playlist.images[0];

  return (
    <div>
      {image?.url && (
        <img
          src={image.url}
          alt={playlist.name}
          className="aspect-square h-[320px] object-cover"
        />
      )}
      <h1>{playlist.name}</h1>
    </div>
  );
};

export default async function Playlists() {
  const playlists =
    (await api.spotify.getUserPlaylists.query()) as playlistType[];

  return (
    <section>
      <header className="p-2">
        <h1>PLAYLISTS</h1>
      </header>
      <div className="grid h-full w-full grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]   justify-items-center">
        {playlists.map((playlist) => (
          <Link href={`/playlist/${playlist.id}`}>
            <PlayListCard playlist={playlist} />
          </Link>
        ))}
      </div>
    </section>
  );
}
