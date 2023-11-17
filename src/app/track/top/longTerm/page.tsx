import { api } from "~/trpc/server";
import TracksGrid from "../../../_components/tracksGrid";
import { trackType } from "~/server/api/routers/spotify.types";

export default async function topTracksLongTerm() {
  const topTracks = (await api.spotify.getUserTopByTypeAndTerm.query({
    type: "tracks",
    term: "long_term",
  })) as trackType[];

  return (
    <>
      <TracksGrid tracks={topTracks} />
    </>
  );
}
