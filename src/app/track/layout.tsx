export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="p-2 h-full overflow-y-auto rounded-lg ">{children}</section>;
}
