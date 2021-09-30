import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
} from "react-instantsearch-dom";

import Hit from "./hit";

export default function NavbarPublic() {
  const searchClient = algoliasearch(
    "RVGFGJXR4H",
    "47b33480bc6fa1c1981a09715bf7778a"
  );

  return (
    <div className="mt-6 mb-6">
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <a>
              <h1 className="font-bold tracking-tighter text-black  dark:text-white text-5xl title-font">
                Skeltz
              </h1>
            </a>
          </Link>
        </div>

        <div>
          <div className="flex flex-row gap-4">
            <InstantSearch
              indexName="skeltz"
              searchClient={searchClient}
            >
              <div className="right-panel">
                <SearchBox />
                <Hits hitComponent={Hit} />
                <Pagination />
              </div>
            </InstantSearch>
            <div>
              <ThemeSwitch />
            </div>

            <div>
              <Link to="/signin">
                <a>
                  <button className="flex items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 border-3 dark:border-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    Sign In
                  </button>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/signin">
                <a>
                  <button className="flex items-center px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-indigo-500 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-900 border-2 dark:border-gray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    Get Started
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
