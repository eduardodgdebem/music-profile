import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import Image from "next/image";
import TracksGrid from "./_components/tracksGrid";
import { SignInButton } from "./_components/signInButton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();

  if (!session) return redirect("signIn");
  // return (
  //   <section className="flex h-full w-full items-center justify-center">
  //     <SignInButton />
  //   </section>
  // );

  const user = await api.spotify.getUser.query();
  const image = user.images[user.images.length - 1];
  const recentTracks = await api.spotify.getUserRecentPlayedTracks.query();

  return (
    <section className="w-full rounded-lg p-2">
      <div className="mb-4 flex h-fit gap-2">
        {image ? (
          <Image
            src={image?.url}
            height={300}
            width={300}
            alt="User profile image"
          />
        ) : (
          <div className="flex aspect-square h-[300px] items-center justify-center rounded-md bg-vanila dark:bg-gray">
            No Image
          </div>
        )}
        <div className="items-between flex h-auto flex-col justify-between">
          <div>
            <h1 className="text-center text-2xl dark:text-white sm:text-4xl">
              {user.display_name}
            </h1>
            <p>{user.followers.total} followers</p>
          </div>
          <div className="mb-2">
            <Link
              href={"/api/auth/signout"}
              className="rounded-full bg-vanila-dark px-10 py-3 font-semibold no-underline transition hover:bg-white/20 dark:bg-gray"
            >
              Sign out
            </Link>
          </div>
        </div>
      </div>
      <section className="relative overflow-y-auto sm:max-h-[calc(100%-310px)]">
        <header className="sticky top-0 z-10 flex w-full justify-between bg-white pb-2 pt-2 dark:bg-black">
          <h2 className="text-2xl font-bold dark:text-vanila sm:text-3xl">
            Recents Tracks
          </h2>
        </header>
        <TracksGrid tracks={recentTracks.map(({ track }) => track)} />
      </section>
    </section>
  );
}
