import React from "react";
import { Link } from "react-router-dom";
//import ThemeSwitch from "./ThemeSwitch";
import SearchBar from "./searchbar";
import axios from "axios";
export default function NavbarPublic({ setPassData,isTransformed,setIsTransformed }) {
  //const prodURL = "https://kunaikit.herokuapp.com/";
  return (
    <div className="mt-6 mb-6">
      <div className="flex md:justify-between flex-row justify-between">
        <button
        onClick={()=>{
          setIsTransformed(!isTransformed)
        }}
        className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="md:mx-3 w-14">
          <Link to="/dashboard">
            <a>
              <img
                className="h-auto w-20"
                src="https://res.cloudinary.com/dev-connect/image/upload/v1634297640/skeltz-logo-002_wk7msl.png"
              />
            </a>
          </Link>
        </div>

        <div>
          <div>
            <div
              style={{ alignItems: "center" }}
              className="flex flex-row gap-4"
            >
              <SearchBar setKit={setPassData} />
              {/* <ThemeSwitch /> */}
              <Link to="/account">
                <a>
                  <button className="hidden md:flex gap-2 items-center px-6 py-2 font-semibold text-black dark:text-white transition duration-500 ease-in-out transform hover:bg-gray-200 dark:hover:bg-gray-700 rounded-sm border-2 border-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div>My Account</div>
                  </button>
                </a>
              </Link>
              <Link to="/create">
                <button className="hidden md:flex hover:scale-110 gap-2 items-center px-6 py-2 font-semibold text-white dark:text-white transition duration-600 ease-in-out transform rounded-sm bg-black  ring-offset-current ring-offset-2">
                  Create Kit
                </button>
              </Link>
              {/* <button
                class="mx-4"
                onClick={() => {
                  axios.get(prodURL + "accounts/logout").then((res) => {
                    window.location.href = window.location.href.replace(
                      window.location.hash,
                      "/#/"
                    );
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
