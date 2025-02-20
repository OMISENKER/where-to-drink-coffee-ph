import React from "react";
import {
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  User,
  UserPlus,
  MenuIcon,
  Coffee,
} from "lucide-react";

import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface MobileMenuProps {
  user: any;
  signOutFunction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ user, signOutFunction }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" className="hover:cursor-pointer">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-brown-fg text-brown-text">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Avatar>
            <AvatarFallback>
              {user?.name
                ?.split(" ")
                .filter(
                  (_: any, i: number, arr: string | any[]) =>
                    i === 0 || i === arr.length - 1
                )
                .map((v: string) => v.slice(0, 1))
                .join("")}
            </AvatarFallback>
            <AvatarImage src={user?.image || null} alt="img" />
          </Avatar>
          <span>안녕, {user?.name?.split(" ")[0]}!</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-brown-border" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="dropdown-item-styles">
            <Link href={`/user/${user.id}`} className="dropdown-link-styles">
              <User className="size-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="dropdown-item-styles">
            <Link href="/recommend" className="dropdown-link-styles">
              <Coffee className="size-4" />
              <span>Recommend a Cafe</span>
            </Link>
          </DropdownMenuItem>
          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent className="w-42 bg-brown-fg text-brown-text">
                <DropdownMenuItem>
                  <Mail />
                  <span>Email</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare />
                  <span>Message</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle />
                  <span>More...</span>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-brown-border" />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button onClick={signOutFunction} className="button-styles w-full">
              <LogOut className="size-4 " />
              <span>Logout</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileMenu;
