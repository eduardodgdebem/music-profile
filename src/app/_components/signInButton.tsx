"use client";

import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <button
      className="rounded-full bg-vanila-dark px-10 py-3 font-semibold no-underline transition hover:bg-white/20 dark:bg-gray"
      onClick={() =>
        signIn("spotify", {
          redirect: true,
          callbackUrl: "/",
        })
      }
    >
      Sign in
    </button>
  );
};
