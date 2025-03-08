import Hero from "@/components/Hero";
import CafeCard, { CafeCardType } from "@/components/CafeCard";
import { client } from "@/sanity/lib/client";
import { CAFES_QUERY } from "@/sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const cafes = await client.fetch(CAFES_QUERY);

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className="w-full">
        <Hero query={query} />
        <section className="w-full h-full p-6">
          <p className="text-lg font-semibold">
            {query ? `Search results for "${query}":` : "Trending cafes:"}
          </p>
          <ul className="mt-7 w-full grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {cafes?.length > 0 ? (
              cafes.map((cafe: CafeCardType) => (
                <CafeCard key={cafe?._id} cafe={cafe} />
              ))
            ) : (
              <p className="text-lg">No cafes found</p>
            )}
          </ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
