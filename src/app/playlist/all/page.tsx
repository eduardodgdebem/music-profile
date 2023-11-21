import { playlistType } from "~/server/api/routers/spotify.types";
import { api } from "~/trpc/server";
import Image from "next/image";
import Link from "next/link";
import { PlaylistsGrid } from "~/app/_components/playlistsGrid";

export default async function Playlists() {
  const playlists = await api.spotify.getUserPlaylists.query();

  return (
    <section className="m-2">
      <header className="sticky top-0 z-10 bg-white p-2 dark:bg-black">
        <h1 className="text-3xl sm:text-4xl font-bold dark:text-vanila-bright">
          Playlists
        </h1>
      </header>
        <PlaylistsGrid playlists={playlists} />
    </section>
  );
}
