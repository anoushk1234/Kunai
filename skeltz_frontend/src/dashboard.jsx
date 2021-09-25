import React from "react";
// import Image from "Image";
import NavbarPrivate from "./components/NavbarPrivate";
import axios from "axios";
import { remark } from "remark";
//import cookieCutter from "cookie-cutter";
import html from "remark-html";
import ReactHtmlParser from "react-html-parser";
//import matter from "gray-matter";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// import { cookieCutter } from 'cookie-cutter';
import thispersondoesnotexist from "./thispersondoesnotexist.jpg";

export async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown);
  console.log(result.toString());
  return result.toString();
}

export default function Dashboard() {
  var upvoted = false;
  const prodURL = "https://kunaikit.herokuapp.com";
  console.log("url: " + thispersondoesnotexist);
  // console.log(cookieCutter.get('username'));
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getTitle() {
      const res = await axios.get("https://kunaikit.herokuapp.com/api/getkit/");
      console.log(res.data["items"].length);
      setData(res.data["items"]);
      console.log(data);
      //console.log(title, content, username, userId, userImage);
    }

    getTitle();
  }, [Dashboard, upvoted]);
  return (
    <div>
      <header>
        <NavbarPrivate />
      </header>
      <body>
        <div className="my-4 flex flex-row justify-center">
          <div>
            <div className="px-4 py-6">
              <h3 className="my-1 flow-root">
                <button
                  type="button"
                  className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500"
                  aria-controls="filter-section-mobile-1"
                  aria-expanded="false"
                >
                  <span className="font-medium text-gray-900">Category</span>
                </button>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-0"
                    name="category[]"
                    value="science"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-0"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Science
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="diys"
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    DIYs
                  </label>
                </div>
              </div>
            </div>
          </div>
          {data.map((item, index) => {
            //console.log(JSON.parse(item)["user_image"]);
            return (
              <div className="mx-4 w-full sm:w-9/12">
                <div className="p-2 my-6 sm:p-4 bg-white  shadow-2xl border-2 border-gray-500">
                  <div>
                    <h1 className="mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black  title-font">
                      {JSON.parse(item)["title"]}
                    </h1>
                  </div>
                  <div
                    onClick={() => {
                      window.location.href =
                        prodURL + "/#/kit/" + JSON.parse(item)["id"];
                    }}
                  >
                    <p className="py-2 text-base leading-relaxed text-gray-700 ">
                      {/*{ReactHtmlParser(
                        JSON.parse(item)["markdown_data"].substring(0, 200)
                      )}*/}
                      <ReactMarkdown>
                        {JSON.parse(item)["markdown_data"].substring(0, 210) +
                          "..."}
                      </ReactMarkdown>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flew-row gap-4">
                      <div className="relative w-12 h-12">
                        <img
                          className="rounded-full border border-gray-100 shadow-sm"
                          src={JSON.parse(item)["profile_image"]}
                          alt="User Avatar"
                          width={320}
                          height={320}
                        />
                      </div>
                      <div>
                        <h1 className="text-base font-medium leading-relaxed max-w-prose text-gray-700 ">
                          {JSON.parse(item)["user"]}
                        </h1>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <div
                      onClick={() => {
                        axios.get(prodURL+'/api/up/'+JSON.parse(item)['id']).then( ()=> {
                          upvoted = !upvoted;
                        })
                      }}
                      >
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
                            strokeWidth="2"
                            d="M5 11l7-7 7 7M5 19l7-7 7 7"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold text-black text-xl">
                        {JSON.parse(item)["upvotes"].length}
                      </p>
                      {/* <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                          />
                        </svg>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </body>
    </div>
  );
}
