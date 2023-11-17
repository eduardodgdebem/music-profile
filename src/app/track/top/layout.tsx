import TopTracksNav from "./components/topTracksNav";

export default function TopTracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopTracksNav />
      {children}
    </>
  );
}
