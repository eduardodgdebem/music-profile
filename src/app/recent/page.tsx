import { api } from "~/trpc/server";
import TracksGrid from "../_components/tracksGrid";

export default async function Recent() {
  const recentTracks = await api.spotify.getUserRecentPlayedTracks.query();

  return (
    <section>
      <header className="p-2">
        <h1 className="text-vanila-bright text-4xl font-bold">Recents Tracks</h1>
      </header>
      <TracksGrid tracks={recentTracks.map(({ track }) => track)} />
    </section>
  );
}
