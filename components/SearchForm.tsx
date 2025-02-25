import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form max-w-3xl w-full min-h-6 bg-white border-3 border-black rounded-[80px] text-sm px-3 py-2 flex flex-row items-center gap-2"
    >
      <input
        name="query"
        defaultValue={query}
        placeholder="Search for cafes"
        className="flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none focus:ring-0 focus:outline-none"
      />
      <div className="flex flex-row items-center gap-2">
        {query && <SearchFormReset />}
        <Button
          type="submit"
          className="rounded-full text-brown-text bg-brown-bg flex justify-center items-center size-8 p-0 hover:cursor-pointer hover:bg-brown-border hover:text-white"
        >
          <SearchIcon className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
