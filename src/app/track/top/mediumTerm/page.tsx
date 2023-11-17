import { api } from "~/trpc/server";
import ArtistGrid from "../../../_components/tracksGrid";
import { trackType } from "~/server/api/routers/spotify.types";
import TracksGrid from "../../../_components/tracksGrid";

export default async function topTracksLongTerm() {
  const topTracks = (await api.spotify.getUserTopByTypeAndTerm.query({
    type: "tracks",
    term: "medium_term",
  })) as trackType[];

  return (
    <>
      <TracksGrid tracks={topTracks} />
    </>
  );
}
