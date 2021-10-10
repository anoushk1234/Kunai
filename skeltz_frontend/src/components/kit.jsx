//import required packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
const Kit = ({ data, setData, prodURL, item, loggeduser }) => {
  //const [upvotesAPI, setUpvotesAPI] = useState("");
  const [upvoted, setUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(0);
  const [hasupvoted, setHasupvoted] = useState(false);
  const upvotesAPI = `${prodURL}/api/votes/${item["id"]}`;
  console.log(upvotesAPI + "upvotesAPI" + item["id"]);

  useEffect(() => {
    axios
      .get(upvotesAPI)
      .then((setupv) => {
        if (setupv.data["users_upvoted"] !== undefined) {
          setupv.data["users_upvoted"].includes(loggeduser)
            ? setHasupvoted(true)
            : setHasupvoted(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggeduser, upvotesAPI]);

  return (
    <div className="mx-4 w-full sm:w-9/12">
      <div className="p-2 my-6 sm:p-4 bg-wKite  shadow-2xl border-4 border-black rounded-md">
        <div>
          <h1 className="mb-2 text-2xl sm:text-3xl font-semibold leading-none tracking-tighter text-black  title-font">
            {item["title"]}
          </h1>
        </div>
        <div
          onClick={() => {
            window.location.href = prodURL + "/#/kit/" + item["id"];
          }}
        >
          <p className="py-2 text-base leading-relaxed text-gray-700 ">
            {/*{ReactHtmlParser(
                  JSON.parse(item)["markdown_data"].substring(0, 200)
                )}*/}
            <ReactMarkdown>
              {item["markdown_data"].substring(0, 210) + "..."}
            </ReactMarkdown>
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flew-row gap-4">
            <div className="relative w-12 h-12">
              <img
                className="rounded-full border border-gray-100 shadow-sm"
                src={item["profile_image"]}
                alt="User Avatar"
                width={320}
                height={320}
              />
            </div>
            <div>
              <h1 className="text-base font-medium leading-relaxed max-w-prose text-gray-700 ">
                {item["user"]}
              </h1>
            </div>
            <div className="flex flex-row">
              <button
                onClick={() => {
                  axios.get(prodURL + "/api/up/" + item["id"]).then(() => {
                    setUpvoted(!upvoted);
                  });
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
              </button>
              <p className="font-semibold text-black text-xl">
                {item["upvotes"].length}
              </p>
              {item["user_id"] === loggeduser ? (
                <button
                  type="button"
                  onClick={() => {
                    axios
                      .get(prodURL + "/api/deletekit/" + item["id"])
                      .then(() => {
                        setData(
                          data.filter(
                            (i) => JSON.parse(i)["index"] !== item["index"]
                          )
                        );
                      });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 flex"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Kit;
