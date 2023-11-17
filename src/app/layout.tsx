import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { Nav } from "./_components/nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-vanila-brigh text-vanila max-h-screen overflow-hidden">
        <TRPCReactProvider cookies={cookies().toString()}>
          <div className="flex max-h-screen flex-col-reverse gap-2 p-2 sm:flex-row">
            <div className="">
              <Nav />
            </div>
            <main className="bg-gray-dark relative max-h-screen max-sm:h-screen w-full overflow-hidden rounded-lg">
              {children}
              <div className="from-gray-dark pointer-events-none sticky bottom-0 left-0 h-48 w-full bg-gradient-to-t to-[transparent]"></div>
            </main>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
