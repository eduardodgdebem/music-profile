import { api } from "~/trpc/server";
import ArtistGrid from "../components/artistsGrid";
import { artistType } from "~/server/api/routers/spotify.types";

export default async function topArtistsLongTerm() {
  const topArtists = (await api.spotify.getUserTopByTypeAndTerm.query({
    type: "artists",
    term: "long_term",
  })) as artistType[];

  return (
    <>
      <ArtistGrid artists={topArtists} />
    </>
  );
}
