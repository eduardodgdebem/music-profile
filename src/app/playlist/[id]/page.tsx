import { api } from "~/trpc/server";
import TrackRow from "~/app/_components/trackRow";

export default async function Artist({ params }: { params: { id: string } }) {
  const playlist = await api.spotify.getPlaylistsById.query(params);
  const image = playlist.images[0];

  const basePlaylistItemsUrl = playlist.tracks.href.split("?")[0];

  if (!basePlaylistItemsUrl) return;

  const playlistItems = await api.spotify.getByUrl.query({
    url: basePlaylistItemsUrl,
  });

  return (
    <section className="flex h-full w-full gap-2 max-sm:flex-col">
      <div className="w-min max-sm:flex max-sm:w-full max-sm:gap-2">
        <img
          src={image.url}
          alt={`${playlist.name} cover`}
          className="objcet-cover h-[320px] min-w-[320px] rounded-md max-sm:h-[160px] max-sm:min-w-[160px]"
        />
        <div className="w-fit">
          <h1 className="text-4xl dark:text-vanila-bright">{playlist.name}</h1>
          <p className="text-xl">by {playlist.owner.display_name}</p>
          <p className="text-xl">{playlist.tracks.total} tracks</p>
        </div>
      </div>

      <div className="grid h-full w-full grid-cols-1 sm:overflow-x-auto gap-2">
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
