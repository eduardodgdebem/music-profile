import { api } from "~/trpc/server";
import Image from "next/image";
import {
  playlistTracksRes,
  trackType,
} from "~/server/api/routers/spotify.types";
import TracksGrid from "~/app/_components/tracksGrid";
import Link from "next/link";
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
    <section className="flex h-full w-full">
      <div className="w-fit">
        <img
          src={image.url}
          alt={`${playlist.name} cover`}
          className="objcet-cover h-[320px] min-w-[320px]"
        />
        <div className="w-fit">
          <h1>{playlist.name}</h1>
          <p>by {playlist.owner.display_name}</p>
          <p>{playlist.tracks.total} tracks</p>
        </div>
      </div>

      <div className="grid h-full w-full grid-cols-1 overflow-x-auto">
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
