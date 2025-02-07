import React from "react";
import Link from "next/link";
import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const navbar = () => {
  return (
    <div className="top-0 h-24 w-full flex items-center justify-between gap-10 px-10 bg-gray-800 text-white ">
      <div>
        <Link href={"/"} className="font-sansita text-3xl">
          Where to Drink Coffee PH
        </Link>
      </div>
      <div className="flex gap-10 items-center text-xl">
        <Link href="/" className="font-nunito">
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
    </div>
  );
};

export default navbar;
