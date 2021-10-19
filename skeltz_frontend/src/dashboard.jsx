import React from "react";
// import Image from "Image";
//import NavbarPrivate from "./components/NavbarPrivate";
import axios from "axios";
//import { remark } from "remark";
//import cookieCutter from "cookie-cutter";
//import html from "remark-html";
import Kit from "./components/kit";
// import ReactHtmlParser from "react-html-parser";
//import matter from "gray-matter";
import { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// // import { cookieCutter } from 'cookie-cutter';

export default function Dashboard({
  passData,
  isTransformed,
  setIsTransformed,
}) {
  const [loggeduser, setLoggeduser] = useState("");
  const [category, setCategory] = useState([]);

  //const [item, setItem] = useState([]);
  const prodURL = "https://kunaikit.herokuapp.com";
  //console.log("url: " + thispersondoesnotexist);
  // console.log(cookieCutter.get('username'));
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getTitle() {
      const res = await axios.get(prodURL + "/api/getkit/");
      console.log(res.data["items"].length);
      //setData(res.data["items"]);

      setData(res.data["items"]);
      if (passData.length > 0) {
        passData.map((item, index) => {
          passData[index] = JSON.stringify(item);
        });
        setData(passData);
      }

      console.log(passData);
      //console.log(title, content, username, userId, userImage);
    }

    getTitle();
  }, [Dashboard, passData]);

  useEffect(() => {
    console.log(category);
  }, [category]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(prodURL + "/auth/userdetails/");
      setLoggeduser(response.data["user_id"]);
      if (
        response.status === 200 &&
        !window.location.hash.endsWith("#/dashboard")
      ) {
        window.location.href = prodURL + "/#/dashboard";
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <body>
        <div className="my-4 flex flex-1 flex-row justify-evenly border-4 border-transparent">
          {/* <!--- mobile menu --> */}
          <div
            class={
              isTransformed
                ? "translate-x-0 duration-200 ease-in-out opacity-100 bg-white md:bg-transparent w-screen md:w-auto md:-left-0 md:absolute h-screen md:h-auto z-10"
                : "-translate-x-full ease-in-out duration-200 bg-transparent z-10 opacity-0"
            }
            className="absolute inset-y-xl md:-left-20 transform md:relative  md:translate-x-0 -translate-x-full transition duration-200 ease-in-out"
          >
            <div className="px-4 py-6 md:flex flex-col justify-evenly border-4 border-white">
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
                    value="Web Dev"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-0"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Web Dev🕸
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Data Science"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Data Science📊
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Graphic Design"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Graphic Design🎨
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Digital Marketing"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Digital Marketing📈
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Writing"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Writing📝
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Web 3"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Web 3 🌐
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Bootstrapping"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Bootstrapping🔨
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="filter-mobile-category-4"
                    name="category[]"
                    value="Startups"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCategory([...category, e.target.value]);
                      } else {
                        setCategory(
                          category.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  ></input>
                  <label
                    htmlFor="filter-mobile-category-4"
                    className="ml-3 min-w-0 flex-1 text-gray-500"
                  >
                    Startups🦄
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:relative md:max-w-xl flex flex-1 flex-col justify-evenly ">
            {data.map((item, index) => {
              item = JSON.parse(item);
              if (
                category.includes(item["categories"]) ||
                category.length === 0
              ) {
                return (
                  <Kit
                    data={data}
                    setData={setData}
                    prodURL={prodURL}
                    item={item}
                    loggeduser={loggeduser}
                  />
                );
              }
            })}
          </div>
        </div>
      </body>
    </div>
  );
}
