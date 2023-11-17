import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { getServerAuthSession } from "~/server/auth";
import {
  artistType,
  audioFeaturesType,
  paginatedResponse,
  playlistItemType,
  playlistType,
  recentPlayedResponse,
  trackType,
} from "./spotify.types";

const spotifyReqByUrl = async <T>(url: string): Promise<T> => {
  const session = (await getServerAuthSession()) as any;
  return (await fetch(url, {
    headers: { Authorization: `Bearer ${session.accessToken}` },
  }).then((r) => r.json())) as any;
};

const addQuery = (url: string, query: string) => {
  if (url.includes("?")) return url + "&" + query;
  return url + "?" + query;
};

const getAllItems = async <T>(url: string, query?: string) => {
  let firstUrl = url;

  if (query) firstUrl = addQuery(url, query);

  const firstUserTop = await spotifyReqByUrl<paginatedResponse<T[]>>(firstUrl);

  if (!firstUserTop?.items?.length) return [];

  const topList = firstUserTop.items;
  const topTotal = firstUserTop.total;
  const topLimit = firstUserTop.limit;
  let allReqsUrls: string[] = [];

  for (let i = topLimit; i <= topTotal; i += topLimit) {
    let newUrl = `${url}?limit=${topLimit}&offset=${i}`;

    if (query) newUrl = addQuery(newUrl, query);

    allReqsUrls = [...allReqsUrls, newUrl];
  }

  if ((topTotal % topLimit) - topLimit > 0) {
    let newUrl = `${url}?limit=${topLimit}&offset=${topTotal - topLimit}`;

    if (query) newUrl = addQuery(newUrl, query);

    allReqsUrls = [...allReqsUrls, newUrl];
  }

  const allReqs = allReqsUrls.map((url) =>
    spotifyReqByUrl<paginatedResponse<T[]>>(url),
  );

  return await Promise.all(allReqs).then((allRes) => {
    const allResItmes = allRes.map((res) => res.items).flat();
    return [...topList, ...allResItmes];
  });
};

export const spotifyRouter = createTRPCRouter({
  getUserTopByTypeAndTerm: protectedProcedure
    .input(z.object({ type: z.string(), term: z.string() }))
    .query(async ({ input }) => {
      return getAllItems(
        `https://api.spotify.com/v1/me/top/${input.type}`,
        `time_range=${input.term}`,
      );
    }),

  getArtistById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) =>
      spotifyReqByUrl<artistType>(
        `https://api.spotify.com/v1/artists/${input.id}`,
      ),
    ),

  getTrackById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) =>
      spotifyReqByUrl<trackType>(
        `https://api.spotify.com/v1/tracks/${input.id}`,
      ),
    ),

  getAudioFeaturesById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) =>
      spotifyReqByUrl<audioFeaturesType>(
        `https://api.spotify.com/v1/audio-features/${input.id}`,
      ),
    ),

  getUserRecentPlayedTracks: protectedProcedure.query(() =>
    spotifyReqByUrl<recentPlayedResponse>(
      `https://api.spotify.com/v1/me/player/recently-played`,
    ).then((res) => res.items),
  ),

  getUserPlaylists: protectedProcedure.query(
    () =>
      getAllItems(`https://api.spotify.com/v1/me/playlists`) as Promise<
        playlistType[]
      >,
  ),

  getPlaylistsById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      return spotifyReqByUrl<playlistType>(
        `https://api.spotify.com/v1/playlists/${input.id}`,
      );
    }),

  getByUrl: protectedProcedure
    .input(z.object({ url: z.string() }))
    .query(({ input }) => {
      return getAllItems<playlistItemType>(input.url);
    }),
});
