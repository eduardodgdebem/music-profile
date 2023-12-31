import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Nav } from "./_components/nav";
import { getServerAuthSession } from "~/server/auth";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Music Profile T3",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();

  return (
      <html lang="en" >
        <body className="bg-vanila-brigh h-[100svh] overflow-hidden text-vanila">
          <TRPCReactProvider cookies={cookies().toString()}>
            <Providers>
            <div className="flex h-full flex-col-reverse sm:flex-row bg-white text-gray-dark dark:bg-black dark:text-vanila">
              {session && <Nav />}
              <main className="relative h-full w-full overflow-hidden overflow-y-auto duration-300 sm:opacity-[0.95]">
                {children}
              </main>
            </div>
            </Providers>
          </TRPCReactProvider>
        </body>
      </html>
  );
}
