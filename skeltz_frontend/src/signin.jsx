import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitch from "./components/ThemeSwitch";

export default function SignIn() {
  return (
    <div className="mt-6 mb-6">
      <div>
        <div className="flex flex-row justify-between">
          <Link to="/">
            <a>
              <h1 className="font-bold tracking-tighter text-black dark:text-white text-5xl title-font">
                Kunai
              </h1>
            </a>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <div>
            <h1 className="mt-12 text-2xl font-semibold text-black dark:text-white tracking-ringtighter sm:text-3xl title-font">
              Sign in to your account
            </h1>
            <hr className="my-6 border-blueGray-300"></hr>
            <div>
              <button
                type="button"
                onClick={() => {
                  //console.log(process.env.REACT_APP_MODE);
                  if (process.env.REACT_APP_MODE == 'prod') {
                    //console.log(process.env.REACT_APP_MODE);
                    window.location.href =
                      "https://kunaikit.herokuapp.com/accounts/twitter/login";
                  } else {
                    window.location.href =
                      "http://127.0.0.1:8000/accounts/twitter/login";
                  }
                }}
                className="inline-flex w-full px-4 py-3 font-semibold text-black dark:text-black hover:text-white dark:hover:text-white transition duration-500 ease-in-out transform bg-white border rounded-lg border-blueGray-300 hover:bg-indigo-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              >
                <div className="flex items-center justify-center mx-auto">
                  <div className="flex items-center justify-center ">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </div>
                  <span className="ml-4 "> Sign in with Twitter </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
