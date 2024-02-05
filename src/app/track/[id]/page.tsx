import { api } from "~/trpc/server";
import Image from "next/image";
import { keysByNumber, modeByNumber } from "~/server/api/routers/spotify.types";
import Link from "next/link";
import { PreviewPlayer } from "~/app/_components/previewPlayer";
import { SpotifySvg } from "~/app/_components/svg/spotifySvg";

const TrackFieldCells = ({
  value,
  title,
}: {
  value: string | number;
  title: string;
}) => {
  return (
    <div>
      <h2 className="text-2xl dark:text-vanila-bright">{value}</h2>
      <p>{title}</p>
    </div>
  );
};

export default async function Track({ params }: { params: { id: string } }) {
  const track = await api.spotify.getTrackById.query(params);
  const audioFeatures = await api.spotify.getAudioFeaturesById.query(params);
  if (!track?.album?.images) return <h1>NO TRACK FOUND</h1>;

  const image = track.album.images[1];

  const duration = (track.duration_ms / 60).toString();
  const durationParsed = (duration.slice(0, 1) + ":" + duration.slice(1))
    .split("", 4)
    .join("");

  return (
    <div className="flex flex-col gap-2 p-2">
      <section className="flex gap-2 max-sm:flex-col">
        <Image
          src={image.url}
          height={image.height}
          width={image.width}
          alt={`Photo of the album ${track.album.name}`}
        ></Image>
        <div className="flex flex-col justify-between">
          <div className="flex w-full flex-col gap-1 max-sm:flex-row">
            <div>
              <h1 className="text-4xl font-bold dark:text-vanila-bright">
                {track.name}
              </h1>
              <div className="flex">
                {track.artists.map((artist, i) => (
                  <Link
                    href={`/artist/${artist.id}`}
                    key={artist.id}
                    className="text-2xl duration-300 hover:underline dark:hover:text-vanila-bright"
                  >
                    <p>
                      {artist.name} {track.artists.length == i + 1 ? "" : ", "}
                    </p>
                  </Link>
                ))}
              </div>
              <p>
                {track.album.name} &#x2022;{" "}
                {track.album.release_date.split("-")[0]}
              </p>
            </div>
            {track.preview_url && (
              <div>
                <PreviewPlayer previewUrl={track.preview_url} />
              </div>
            )}
          </div>
          {track.external_urls.spotify && (
              <Link
                href={track.external_urls.spotify}
                target="_blank"
                className="flex gap-2 rounded-2xl bg-green-spotify p-3 text-lg text-white font-medium w-fit"
              >
                <SpotifySvg className="h-7" />
                PLAY ON SPOTIFY
              </Link>
          )}
        </div>
      </section>

      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(7rem,_1fr))] gap-4 rounded-lg bg-vanila p-4 dark:bg-gray">
        <TrackFieldCells title="Duration" value={durationParsed} />
        <TrackFieldCells
          title="Key"
          value={keysByNumber[audioFeatures.key] ?? ""}
        />
        <TrackFieldCells
          title="Modality"
          value={modeByNumber[audioFeatures.mode] ?? ""}
        />
        <TrackFieldCells
          title="Time Signature"
          value={audioFeatures.time_signature ?? ""}
        />
        <TrackFieldCells title="Tempo(BPM)" value={audioFeatures.mode ?? ""} />
        <TrackFieldCells title="Popularity" value={track.popularity ?? ""} />
      </div>
    </div>
  );
}
