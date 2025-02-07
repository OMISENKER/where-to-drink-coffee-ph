import React from "react";
import Link from "next/link";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const navbar = () => {
  return (
    <div className="top-0 h-24 w-full flex justify-end items-center gap-10 px-10 bg-gray-800 text-white font-nunito">
      <Link href="/" className="font-sansita">
        Home
      </Link>
      <Link href="/trending">Trending</Link>
      <form
        action={async () => {
          "use server";
          await signIn("facebook");
        }}
      >
        <Button type="submit">Sign in with Facebook</Button>
      </form>
    </div>
  );
};

export default navbar;
