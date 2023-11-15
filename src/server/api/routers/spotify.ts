import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { getServerAuthSession } from "~/server/auth";

const spotifyReqByUrl = async (url: string) => {
  const session = await getServerAuthSession();
  if (!session?.user) return null;
  return await fetch(
    url,
    { headers: { Authorization: `Bearer ${session.accessToken}` } },
  ).then((r) => r.json());
}

export const spotifyRouter = createTRPCRouter({
  hello: protectedProcedure.query(async () => {

    const playlists = await spotifyReqByUrl('https://api.spotify.com/v1/me/playlists?limit=10&offset=0')
    
    console.log(playlists)
    return "OPA";
  }),
});
