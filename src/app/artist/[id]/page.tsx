import { api } from "~/trpc/server";
import Image from "next/image";
import { AngledElement } from "~/app/_components/angledElement";

export default async function Artist({ params }: { params: { id: string } }) {
  const artist = await api.spotify.getArtistById.query({ id: params.id });
  if (!artist.images) return <h1>NO ARTIST FOUND</h1>;

  const image = artist.images?.[1];

  return (
    <section className="p-2 w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-4 h-fit">
        <AngledElement>

        <Image
          src={image.url}
          height={image.height}
          width={image.width}
          alt={`Photo of ${artist.name}`}
          className="rounded-lg"
        ></Image>
        </AngledElement>
        {/* <AngledImage
          src={image.url}
          height={image.height}
          width={image.width}
          alt={`Photo of ${artist.name}`}
        /> */}

        <div>
          <h1 className="dark:text-vanila-bright text-4xl font-bold">
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
