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
        <h1>Add your Cafe</h1>
      </section>
      <CafeForm />
    </>
  );
};

export default page;
