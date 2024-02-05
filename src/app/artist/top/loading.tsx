import Skeleton from "~/app/_components/skeleton";

export default function Loading() {
  const arr = Array.from({ length: 10 }, (_, i) => i);
  return (
    <section className="m-2 grid gap-5">
      {arr.map((x) => (
        <div key={x} className="flex h-full w-full gap-2">
          <div className="aspect-square h-[64px] object-cover ">
            <Skeleton />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="h-5 w-20">
              <Skeleton />
            </h3>
            <p className="h-5 w-52">
              <Skeleton />
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
