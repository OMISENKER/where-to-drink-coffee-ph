import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";

export async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
  console.log("logging out");
}

const Navbar = async () => {
  const session = await auth();
  const sessionUser = session?.user;

  return (
    <div className="top-0 h-24 w-full flex items-center justify-between gap-10 px-10 bg-gray-800 text-white">
      <div>
        <Link href={"/"} className=" text-base flex items-center gap-2">
          <Image src="/icon.png" width={50} height={50} alt="wc" />
          <span>W2DCoffeePH</span>
        </Link>
      </div>
      <div className="flex gap-10 items-center text-base">
        {session && session?.user ? (
          <>
            <MobileMenu
              user={sessionUser || " "}
              signOutFunction={handleSignOut}
            />
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("facebook");
            }}
          >
            <Button
              type="submit"
              className="text-base font-nunito hover:cursor-pointer"
            >
              Sign in
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
