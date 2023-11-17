/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "wrapped-images.spotifycdn.com",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "lineup-images.scdn.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thisis-images.spotifycdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mosaic.scdn.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image-cdn-fa.spotifycdn.com",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "seed-mix-image.spotifycdn.com",
        port: "",
        pathname: "/v6/img/**",
      },
      {
        protocol: "https",
        hostname: "newjams-images.scdn.co" ,
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "daily-mix.scdn.co" ,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeded-session-images.scdn.co" ,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default config;
