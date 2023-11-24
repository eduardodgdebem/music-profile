import { api } from "~/trpc/server";
import TrackRow from "~/app/_components/trackRow";
import Link from "next/link";

export default async function Artist({ params }: { params: { id: string } }) {
  const playlist = await api.spotify.getPlaylistsById.query(params);
  const image = playlist.images[0];

  const basePlaylistItemsUrl = playlist.tracks.href.split("?")[0];

  if (!basePlaylistItemsUrl) return;

  const playlistItems = await api.spotify.getByUrl.query({
    url: basePlaylistItemsUrl,
  });

  return (
    <section className="flex h-screen w-full gap-2 p-2 max-sm:flex-col">
      <div className="w-min max-sm:flex max-sm:w-full max-sm:gap-2">
        <img
          src={image.url}
          alt={`${playlist.name} cover`}
          className="objcet-cover h-[320px] min-w-[320px] max-sm:h-[160px] max-sm:min-w-[160px]"
        />
        <div className="w-fit">
          <h1 className="text-3xl sm:text-4xl dark:text-vanila-bright">{playlist.name}</h1>
          <p className="text-base sm:text-xl">by {playlist.owner.display_name}</p>
          <p className="text-base sm:text-xl">{playlist.tracks.total} tracks</p>
          {playlist.external_urls.spotify && (
            <div className="mt-2">
              <Link
                href={playlist.external_urls.spotify}
                className="bg-green-spotify rounded-2xl p-3 text-sm text-white"
              >
                PLAY ON SPOTIFY
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="grid h-full w-full grid-cols-1 gap-2 sm:overflow-x-auto">
        {playlistItems.map((item) => {
          if (item?.track)
            return (
              <div className="flex justify-between">
                <TrackRow track={item.track} />
              </div>
            );
        })}
      </div>
    </section>
  );
}
