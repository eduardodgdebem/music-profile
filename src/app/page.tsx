import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Image from "next/image";
import TracksGrid from "./_components/tracksGrid";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session)
    return (
      <div>
        <Link href="/api/auth/signin">Sign in</Link>
      </div>
    );

  const user = await api.spotify.getUser.query();
  const image = user.images[user.images.length - 1];
  const recentTracks = await api.spotify.getUserRecentPlayedTracks.query();

  return (
    <section className="w-full h-full rounded-lg p-2">
      <div className="flex h-fit gap-2 mb-4">
        {image ? (
          <Image
            src={image?.url}
            height={image?.height}
            width={image?.width}
            alt="User profile image"
            className="rounded-md"
          />
        ) : (
          <div className="flex aspect-square h-[300px] items-center justify-center rounded-md bg-vanila dark:bg-gray">
            No Image
          </div>
        )}
        <div className="items-between flex h-auto flex-col justify-between">
          <div>
            <h1 className="text-center text-2xl sm:text-4xl dark:text-white">
              {user.display_name}
            </h1>
            <p>{user.followers.total} followers</p>
          </div>
          <div className="mb-2">
            <Link
              href={"/api/auth/signout"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              Sign out
            </Link>
          </div>
        </div>
      </div>
      <section className="relative overflow-y-auto sm:max-h-[calc(100%-310px)]">
        <header className="sticky top-0 z-10 flex w-full justify-between bg-white dark:bg-black pb-2 pt-2">
          <h2 className="text-2xl sm:text-3xl font-bold dark:text-vanila">
            Recents Tracks
          </h2>
        </header>
        <TracksGrid tracks={recentTracks.map(({ track }) => track)} />
      </section>
    </section>
  );
}
