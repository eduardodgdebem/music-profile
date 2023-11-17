export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full overflow-y-auto rounded-lg p-2 ">
      {children}
    </section>
  );
}
