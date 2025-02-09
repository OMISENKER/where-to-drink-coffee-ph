import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="top-0 h-24 w-full flex items-center justify-between gap-10 px-10 bg-gray-800 text-white">
      <div>
        <Link
          href={"/"}
          className="font-sansita text-base flex items-center gap-2"
        >
          <Image src="/icon.png" width={50} height={50} alt="wc" />
          <span>W2DCoffeePH</span>
        </Link>
      </div>
      <div className="flex gap-10 items-center text-base">
        {session && session?.user ? (
          <>
            <Link href="/recommend">
              <span>Recommend</span>
            </Link>
            <Link href={`/user/${session?.user?.id}`}>
              <Avatar>
                <AvatarFallback>
                  {session?.user?.name?.split(" ")[0]}
                </AvatarFallback>
                <AvatarImage src={session?.user?.image || ""} alt="img" />
              </Avatar>
            </Link>
            {/* <form
              action={async () => {
                "use server";
                await signOut(options: {redirectTo: "/"});
              }}
            >
              <Button type="submit" className="text-base font-nunito">
                Sign out
              </Button>
            </form> */}
          </>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("facebook");
            }}
          >
            <Button type="submit" className="text-base font-nunito">
              Sign in
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Navbar;
