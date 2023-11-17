import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <section className="h-full overflow-y-auto rounded-lg p-2">
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-2xl ">
          {session && <span>Logged in as {session.user?.name}</span>}
        </p>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </section>
  );
}

// async function Test() {
//   const session = await getServerAuthSession();
//   if (!session?.user) return null;

//   const test = await api.spotify.hello.query();

//   return (
//     <div className="w-full max-w-xs">
//       {test}
//     </div>
//   );
// }
