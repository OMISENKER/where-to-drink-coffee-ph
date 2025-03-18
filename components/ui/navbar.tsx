import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobile-menu";

export async function handleSignOut() {
  "use server";
  await signOut({ redirectTo: "/" });
}

const Navbar = async () => {
  const session = await auth();
  const sessionUser = session?.user;

  return (
    <div className="top-0 h-24 w-full flex items-center justify-between gap-10 px-10 bg-brown-bg text-brown-text">
      <div>
        <Link
          href={"/"}
          className=" text-base font-semibold flex items-center gap-2"
        >
          <Image
            src={"/w2dcph-logo-png.png"}
            width={150}
            height={50}
            alt="W2DCoffeePH"
          />
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
