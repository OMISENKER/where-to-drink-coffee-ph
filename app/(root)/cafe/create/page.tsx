import React from "react";
import CafeForm from "@/components/CafeForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <>
      <section>
        <div className="min-h-52 w-full bg-[url('/hero-bg.jpg')] bg-no-repeat bg-cover bg-start flex items-center justify-center">
          <div className="bg-brown-border p-3 rounded-2xl flex flex-col gap-8 items-center justify-center">
            <h1 className="text-2xl font-bold text-white uppercase text-center py-2 px-4">
              Add your Cafe
            </h1>
          </div>
        </div>
      </section>
      <CafeForm />
    </>
  );
};

export default page;
