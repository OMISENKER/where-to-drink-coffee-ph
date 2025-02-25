import React from "react";
import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default function Hero({ query }: { query?: string }) {
  return (
    <div className="min-h-72 w-full bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-start flex items-center justify-center">
      <div className="bg-brown-border p-3 rounded-2xl flex flex-col gap-8 items-center justify-center">
        <Image
          src="/w2dcph-logo-light-png.png"
          width={300}
          height={100}
          alt="W2DCoffeePH"
        />
        <SearchForm query={query} />
      </div>
    </div>
  );
}
