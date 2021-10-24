import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./searchbar";

export default function NavbarPublic({setPassData}) {
  return (
    <div className="mt-6 mb-6">
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <a>
              <img className="h-auto w-20" src="https://res.cloudinary.com/dev-connect/image/upload/v1634297640/skeltz-logo-002_wk7msl.png" />
            </a>
          </Link>
        </div>

        <div>
          <div className="flex flex-row gap-4">
            <div>
              <SearchBar setKit={setPassData} />
            </div>

            <div>
              <Link to="/signin">
                <a>
                  <button className="flex items-center px-6 py-2 font-semibold bg-black text-white rounded-md dark:text-white transition duration-500 ease-in-out transform  dark:hover:bg-gray-700 border-3 dark:border-black  hover:scale-110 hover:bg-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    Sign In
                  </button>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/signin">
                <a>
                  <button className="flex rounded-md items-center px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-indigo-500 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-900 border-2 dark:border-gray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
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
