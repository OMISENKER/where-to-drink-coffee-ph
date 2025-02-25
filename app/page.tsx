import Image from "next/image";
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
