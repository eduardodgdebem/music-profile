import Link from "next/link";
import type { playlistType } from "~/server/api/routers/spotify.types";

const PlayListCard = ({ playlist }: { playlist: playlistType }) => {
  const image = playlist.images[1] || playlist.images[0];

  return (
    <Link
      href={`/playlist/${playlist.id}`}
      className="text-vanila flex flex-col justify-center overflow-hidden duration-300 hover:text-white hover:opacity-50"
    >
      <div className="flex aspect-square h-[300px] items-center justify-center object-cover">
        {image ? (
          <img
            src={image.url}
            alt={playlist.name}
            className="aspect-square h-[300px] object-cover"
          />
        ) : (
          <p>No image</p>
        )}
      </div>
      <div className="flex items-end break-words p-2 text-2xl">
        <h3 className="text-gray-dark dark:text-vanila-bright text-2xl">
          {playlist.name}
        </h3>
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
