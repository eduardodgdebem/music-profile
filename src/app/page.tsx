import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  const session = await getServerAuthSession();
  const hello = await api.post.hello.query({text: "from server"})

  return (
    <section className="h-full overflow-y-auto rounded-lg p-2">
      <div className="flex flex-col items-center justify-center gap-4">
        {hello.greeting}
        <p className="text-center text-2xl ">
          {session && <span>Logged in as {session.user?.name}</span>}
        </p>
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin/spotify"}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
    </section>
  );
}