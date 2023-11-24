import { api } from "~/trpc/server";
import Image from "next/image";
import { AngledElement } from "~/app/_components/angledElement";

export default async function Artist({ params }: { params: { id: string } }) {
  const artist = await api.spotify.getArtistById.query({ id: params.id });
  if (!artist.images) return <h1>NO ARTIST FOUND</h1>;

  const image = artist.images?.[1];

  return (
    <section className="flex h-full w-full items-center justify-center p-2">
      <div className="flex h-fit flex-col gap-4">
        <AngledElement>
          <Image
            src={image.url}
            height={image.height}
            width={image.width}
            alt={`Photo of ${artist.name}`}
          ></Image>
        </AngledElement>
        <div>
          <h1 className="text-4xl font-bold dark:text-vanila-bright">
            {artist.name}
          </h1>
          <p className="text-2xl">followers: {artist.followers.total}</p>
          <p className="text-2xl">
            genres: {artist.genres.toString().replace(" ", ", ")}
          </p>
          <p className="text-2xl">popularity: {artist.popularity + "%"}</p>
        </div>
      </div>
    </section>
  );
}
