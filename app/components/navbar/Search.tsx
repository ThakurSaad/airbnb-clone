"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div
      className="
        py-2
        w-full
        md:w-auto
        border-[1px]
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
      "
    >
      <div
        className="
          flex
          flex-row
          items-center
          justify-between
        "
      >
        <div
          className="
            px-6
            text-sm
            font-semibold
          "
        >
          Anywhere
        </div>
        <div
          className="
            px-6
            hidden
            sm:block
            text-sm
            font-semibold
            border-x-[1px]
            flex-1
            text-center
          "
        >
          Any Week
        </div>
        <div
          className="
            pl-6
            pr-2
            text-sm
            text-gray-600
            flex
            flex-row
            items-center
            gap-3
          "
        >
          <div
            className="
              p-2
              bg-rose-500
              rounded-full
              text-white
            "
          >
            Add Guests
          </div>
          <div>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
