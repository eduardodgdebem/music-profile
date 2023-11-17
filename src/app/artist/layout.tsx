export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" h-full overflow-y-auto p-2 duration-300 sm:opacity-[0.95] sm:hover:opacity-100">
      {children}
    </section>
  );
}
