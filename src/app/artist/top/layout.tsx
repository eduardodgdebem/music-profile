import TopArtistsNav from "./components/topArtistsNav";

export default function TopArtistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-2">
      <TopArtistsNav />
      {children}
    </section>
  );
}
