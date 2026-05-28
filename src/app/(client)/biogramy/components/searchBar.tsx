"use client";

import { SearchIcon } from "@/icons/SearchIcon";

type SearchBarProps = {
  searchQuery: string;
  onSearch: (query: string) => void;
};

export const SearchBar = ({ searchQuery, onSearch }: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="mb-8 flex w-full max-w-sm items-center gap-4"
    >
      <label htmlFor="biograms-search" className="sr-only">
        Wyszukaj biogramy
      </label>
      <div className="relative w-full">
        <input
          id="biograms-search"
          name="search"
          type="text"
          placeholder="Wyszukaj..."
          className="bg-transparent w-[80%] rounded border border-greenMain py-2 pl-10 pr-4 text-sm text-textDarkGreen placeholder:text-greenMain focus:border-greenMain focus:outline-none focus:ring-2 focus:ring-greenMain contrast:border-black00 contrast:bg-yellowContrast contrast:text-black00 contrast:placeholder:text-black00 contrast:focus:border-black00 contrast:focus:ring-black00"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-greenMain contrast:text-black00"
        >
          <SearchIcon className="h-6 w-6" />
        </div>
      </div>
    </form>
  );
};
