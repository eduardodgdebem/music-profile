import { api } from "~/trpc/server";
import Image from "next/image";
import { keysByNumber, modeByNumber } from "~/server/api/routers/spotify.types";
import Link from "next/link";
import { AngledElement } from "~/app/_components/angledElement";

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
      <section className="flex gap-2">
        <AngledElement>
          <Image
            src={image.url}
            height={image.height}
            width={image.width}
            alt={`Photo of the album ${track.album.name}`}
            className="rounded-lg"
          ></Image>
        </AngledElement>
        <div className="">
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
          <p>{track.album.name}</p>
        </div>
      </section>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-4">
        <div>
          <h2 className="text-2xl text-vanila-bright">{durationParsed}</h2>
          <p>Duration</p>
        </div>
        <div>
          <h2>{keysByNumber[audioFeatures.key]}</h2>
          <p>Key</p>
        </div>
        <div>
          <h2>{modeByNumber[audioFeatures.mode]}</h2>
          <p>Modality</p>
        </div>
        <div>
          <h2>{audioFeatures.time_signature}</h2>
          <p>Time Signature</p>
        </div>
        <div>
          <h2>{audioFeatures.mode}</h2>
          <p>Tempo(BPM)</p>
        </div>
        <div>
          <h2>{track.popularity}</h2>
          <p>Popularity</p>
        </div>
      </div>
    </div>
  );
}
