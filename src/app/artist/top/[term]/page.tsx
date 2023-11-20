import { api } from "~/trpc/server";
import { artistType } from "~/server/api/routers/spotify.types";
import ArtistGrid from "../components/artistsGrid";

export default async function topTracksByTerm({
  params,
}: {
  params: { term: string };
}) {
  const topTracks = (await api.spotify.getUserTopByTypeAndTerm.query({
    type: "artists",
    term: params.term,
  })) as artistType[];

  return <ArtistGrid artists={topTracks} />;
}
