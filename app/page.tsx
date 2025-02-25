import Hero from "@/components/Hero";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-">
      <main className="w-full">
        <Hero query={query} />
        <section className="w-full h-full grid grid-cols-2 gap-6 p-6">
          <p className="text-lg font-semibold">
            {query ? `Search results for "${query}"` : "Trending cafes"}
          </p>
          <ul className="mt-7 card_grid"></ul>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
