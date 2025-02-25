"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) {
      form.reset();
    }
  };
  return (
    <Button
      type="reset"
      onClick={reset}
      className="p-0 m-0 w-fit border-0 shadow-none size-8"
    >
      <Link
        href="/"
        className="rounded-full bg-brown-bg flex justify-center items-center size-8 p-0 text-brown-text hover:cursor-pointer hover:bg-brown-border hover:text-white"
      >
        <X className="size-5" />
      </Link>
    </Button>
  );
};

export default SearchFormReset;
