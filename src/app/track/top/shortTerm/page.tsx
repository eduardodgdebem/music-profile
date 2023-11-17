import { api } from "~/trpc/server";
import { trackType } from "~/server/api/routers/spotify.types";
import TracksGrid from "../../../_components/tracksGrid";

export default async function topTracksLongTerm() {
  const TopTracks = await api.spotify.getUserTopByTypeAndTerm.query({
    type: "tracks",
    term: "short_term",
  }) as trackType[];;

  return (
    <>
      <TracksGrid tracks={TopTracks} />
    </>
  );
}
