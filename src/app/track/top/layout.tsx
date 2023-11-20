import TopTracksNav from "./components/topTracksNav";

export default function TopTracksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-2">
      <TopTracksNav />
      {children}
    </section>
  );
}
