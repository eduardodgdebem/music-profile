import Link from "next/link";
import { playlistType } from "~/server/api/routers/spotify.types";

const PlayListCard = ({ playlist }: { playlist: playlistType }) => {
  const image = playlist.images[1] || playlist.images[0];

  return (
    <Link
      href={`/playlist/${playlist.id}`}
      className="relative overflow-hidden rounded-md bg-gray text-vanila duration-300 hover:text-white hover:opacity-50"
    >
      <div className="flex aspect-square h-[320px] items-center justify-center  bg-gray object-cover">
        {image ? (
          <img
            src={image.url}
            alt={playlist.name}
            className=" h-full object-cover"
          />
        ) : (
          <p>No image</p>
        )}
      </div>
      <div className="pointer-events-none absolute bottom-0 flex h-20 w-full items-end bg-gradient-to-t from-black to-[transparent] p-2 text-2xl">
        <h3>{playlist.name}</h3>
      </div>
    </Link>
  );
};

export const PlaylistsGrid = ({ playlists }: { playlists: playlistType[] }) => {
  return (
    <div className="grid h-full w-full grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] justify-items-center gap-4">
      {playlists.map((playlist) => (
        <PlayListCard playlist={playlist} key={playlist.id} />
      ))}
    </div>
  );
};
